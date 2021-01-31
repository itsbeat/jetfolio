<template>
    <div class="flex ">
        <div class="box-border h-3/4 w-2/4 p-6 m-8    md:box-content bg-blue-200 rounded-3xl text-center ">
            <div class= "w-40 mx-auto mt-5 mb-5 indigo-700 "> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                  </svg>  
            </div>
            <div class= "w-20 mx-auto mt-1 mb-2    indigo-700"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>  
            </div>
            <div class="container">
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
      <div class="grid grid-flow-row w-2/4 ">
          <div class="box-border h-1/4 w-9/12 p-6 m-8    md:box-content bg-blue-200 rounded-3xl text-center row place-self-center">
          <h5>TITOLO</h5>
          <form  >
            <input type ="text"   class="bg-blue-200 rounded-3xl  h-8 w-9/12 text-center row "> 
          </form>
          </div>
          <div class="box-border h-2/4 w-9/12 p-6 m-8    md:box-content bg-blue-200 rounded-3xl text-center  row place-self-center">
           <form>
            <input type ="text" class="bg-blue-200 h-20 w-3/4 rounded-3xl text-center row ">
          </form>
          </div>
          
          <div class="box-border h-1/4 w-9/12 p-6 m-8    md:box-content bg-blue-200 rounded-3xl text-center row  place-self-center">
          <h5>CATEGORIA</h5>
           <form>
            <input type ="text" class="bg-blue-200 rounded-3xl h-8 w-9/12 text-center row " >
          </form>
          </div>
          <div class="box-border h-1   w-28 p-6 m-8  md:box-content bg-blue-200 rounded-3xl text-center row place-self-center">
            <h1 class="text-center" @click="dammiTutto()">PUBBLICA </h1>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                image: '',
                id:null
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
                    console.log(vm.image);
                };
                reader.readAsDataURL(file);
            },
            uploadImage(){
                var id = JSON.parse(localStorage.getItem("user")).id;
                this.$api.post('/image/store',{image: this.image, id:id}).then(response => {
                   console.log(response);
            
                });
            },
            dammiTutto() {
                console.log(JSON.parse(localStorage.getItem("user")).id)
            }
        }
    }
</script>