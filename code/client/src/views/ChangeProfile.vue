<template>
  <div class="ChangeProfile">
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
      </div>
  </div>
</template>

<script>
export default {

  name: 'ChangeProfile',
  components: {
    
  },
  data(){
      return{
        profile: {
            id: null,
            username: null,
            email: null,
            user_info: {
                phone: null,
                biography: null,
            },
            
        },
      }
      
  },
  methods: {
  async editInfo() {
     await this.$api.post("/users/edit",
        this.profile,
        console.log(this.profile)
        );
      },
  },
  async mounted() {
    let response = await this.$api.get(`/users/profile/1`);
    this.profile.id = response.data.id;
    this.profile = response.data;
  }
}
</script>
