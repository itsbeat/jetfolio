<template>
  <div class="ChangeProfile">
     <div class="col-md-3">
        <img :src="imageUrlSrc" class="img-responsive" height="70" width="90">
      </div>
      <div class="px-5">
      <div class="grid grid-cols-3 col-gap-5 mb-4">
        <label class="font-bold">Username</label>
        <input v-model="profile.username" type="text" class="col-span-2 border border-gray-400 rounded p-3"/>
         <label class="font-bold">Email</label>
        <input v-model="profile.email" type="text" class="col-span-2 border border-gray-400 rounded p-3"/>
         <label class="font-bold">Telefono</label>
        <input v-model="profile.user_info.phone" type="text" class="col-span-2 border border-gray-400 rounded p-3"/>
         <label class="font-bold">Biografia</label>
        <input v-model="profile.user_info.biography" type="text" class="col-span-2 border border-gray-400 rounded p-3"/>
        <a @click="editInfo()"><button class="inline-flex items-center justify-center px-5 py-3 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-indigo-100"> Invia</button></a>
      </div>
      <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">File Upload Component</div>
                    <div class="card-body">
                       <div class="row">
                          <div class="col-md-3" v-if="image">
                              <img :src="image" class="img-responsive" height="70" width="90">
                           </div>
                          <div class="col-md-6">
                              <input type="file" v-on:change="onImageChange" class="form-control">
                          </div>
                          <div class="col-md-3">
                             <button class="btn btn-success btn-block" @click="uploadImage">Upload Image</button>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ChangeProfile',
    components: {
        
    },
    data() {
        return {
            image: '',
            profile: {
                id: null,
                username: null,
                email: null,
                user_info: {
                    phone: null,
                    biography: null,
                    image_url:'',
                },  
            },
        };  
    },
    async mounted() {
        let response = await this.$api.get(`/users/profile/1`);
        this.profile.id = response.data.id;
        this.profile = response.data;
        console.log(response.data);
    },
    computed: {
        imageUrlSrc() {
            return "http://localhost:8000/storage/"+ this.profile.user_info.image_url;
        }
    },
    methods: {
        onImageChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        uploadImage() {
            var id = JSON.parse(localStorage.getItem("user")).id;
            this.$api.post('/imageP/store', {image: this.image, id:id}).then(response => {
                console.log(response);
            });
        },
        async editInfo() {
            await this.$api.post("/users/edit",
                this.profile,
                console.log(this.profile)
            );
        }
    },
}
</script>
