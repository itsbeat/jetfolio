<template>
  <div id="app">
    <div class="md:wrapper md:flex sm:inline-block mb-36">
      <div class="lg:w-2/4 sm:w-full bg-white font-sans text-gray-700 md:ml-16 ml-0">
        <div class="container mx-auto p-8 flex"></div>
        <h1 class="color_custom text-3xl text-center mb-3">
          Carica le immagini del tuo portfolio
        </h1>
        <div
          class="container overflow-hidden bg-indigo-100 rounded-md shadow-lg p-6"
        >
          <div class="col-md-5 text-center inline">
            <label for="my-file" class="color_custom block mb-6"
              >Scegli o trascina un'immagine</label
            >
            <form>
              <div class="form-group">
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  multiple="multiple"
                  @change="previewMultiImage"
                  class="custom-file-input"
                  id="my-file"
                />

                <div class="lg:flex lg:flex-wrap lg:mx-auto md:inline-block sm:inline-block border-none p-2 mt-2 w-full ">
                  <template v-if="preview_list.length">
                    <div
                      class="md:flex md:flex-col md:justify-center justify-center  mx-8"
                      v-for="(item, index) in preview_list"
                      :key="index"
                    >
                      <img :src="item" class="img-fluid mx-auto" />
                      <div class="flex flex-col justify-start mt-2">
                        <p class="text-sm">Nome file: {{ image_list[index].name }}</p>
                        <p class="text-sm">
                          Dimensione file:
                          {{ (image_list[index].size / 1024).toFixed(3) }}KB
                        </p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </form>

            <div class="col-12 mt-3 text-center">
              <p class="text-primary"></p>
              <button
                class="p-2 mb-4 focus:outline-none border-2 border-red-600 bg-red-600 text-white border-opacity-100 rounded-3xl"
                @click="reset"
              >
                Rimuovi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:flex sm:flex-col md:w-2/6 sm:w-full  md:px-8 sm:px-4 md:mx-8 sm:mx-4">
        <div class="flex justify-center">
          <!-- Modal container -->
          <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Card container -->
            <form
              class="px-8 py-6 space-y-6 overflow-hidden bg-white rounded-md shadow-lg mt-6"
            >
              <!-- Card heading -->
              <div class="flex justify-between">
                <div class="space-y-2">
                  <h2 class="font-bold text-gray-900">Titolo</h2>
                  <p class="text-sm font-medium leading-5 text-gray-500">
                    <input type="text" v-model="project_info.titolo" placeholder="Inserisci il titolo del progetto" />
                  </p>
                </div>
                <div></div>
              </div>
              <!-- Flow options -->
              <div class="space-y-6">
                <div class="space-y-4">
                  <label class="block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Descrizione del progetto</span
                    >
                    <textarea
                      rows="5"
                      class="md:text-left w-full bg-indigo-100 sm:text-center sm-text-sm"
                      v-model="project_info.descrizione"
                    >
                    </textarea>
                  </label>
                  <div class="flex items-center space-x-6">
                    <div class="space-y-1">
                      <label
                        for="flow-name"
                        class="text-sm font-medium leading-5 text-gray-600"
                      >
                        Categoria
                      </label>
                      <div class="block">
                        <div class="mt-2">
                          <div>
                            <label class="inline-flex items-center">
                              <input type="checkbox" class="form-checkbox" />
                              <span class="ml-2">Programmazione</span>
                            </label>
                          </div>
                          <div>
                            <label class="inline-flex items-center">
                              <input type="checkbox" class="form-checkbox" />
                              <span class="ml-2">Grafica</span>
                            </label>
                          </div>
                          <div>
                            <label class="inline-flex items-center">
                              <input type="checkbox" class="form-checkbox" />
                              <span class="ml-2">Ui Design</span>
                            </label>
                            <div>
                              <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox" />
                                <span class="ml-2">Iot</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label class="flex items-center mt-6 space-x-1.5">

                      <!--
                      <input
                        type="checkbox"
                        name="delay-traversable"
                        class="form-checkbox rounded text-indigo-500"
                      />

                      <span
                        class="flex items-center space-x-1 text-sm leading-5 text-gray-900"
                      >
                        <span class="text-sm leading-5 text-gray-900"
                          >Pubblico</span
                        >
                        <svg
                          class="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                      -->
                    </label>
                  </div>
                </div>
              </div>
              <div class="max-w-md flex justify-center">
                <button
                  type="button"
                  class="bg_custom px-4 py-3 border border-transparent rounded text-white transition duration-300 ease-in-out"
                  @click="createProject()"
                >
                  Pubblica
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.img-fluid {
  max-width: 300px;
  max-height: 200px;
}
@media screen and (min-width: 1100px) {
  .img-fluid {
    max-width: 240px;
    max-height: 200px;
    display: inline-block;
  }
}
@media screen and (max-width: 500px) {
  .img-fluid {
    max-width: 200px;
    height: 120px;
    text-align: center;
  }
}
.color_custom {
  color: #383088;
}
.bg_custom{
  background-color: #383088;
}
</style>
<script>
export default {
  data: function() {
    return {
      preview: null,
      image: null,
      modalOpen: true,
      advancedSettings: false,
      preview_list: [],
      image_list: [],
      project_info:{
        titolo:null,
        descrizione:null,
        id:null,
      },
      data: [],
      flowType: {
        selected: "",
      },
    };
  },
  mounted() {
    
  },
  methods: {
    async createProject(){
      console.log(this.project_info);
      const ls = JSON.parse(localStorage.getItem("user"));
      this.project_info.id = ls.id;

      const invio = await this.$api.post("/project/upload", {
          project_info: this.project_info,
          images: this.preview_list,
      })
      console.log(invio)
    },
    previewMultiImage: function(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;

      if (input.files) {
        // for every photo added
        while (count--) {

          // generate a new FileReader instance
          var reader = new FileReader();

          // load the file data
          reader.onload = (e) => {
            // and then push into this.preview_list
            this.preview_list.push(e.target.result);
            console.log('preview list => ', this.preview_list);
          };

          this.image_list.push(input.files[index]);
          console.log('image list => ', this.image_list);

          reader.readAsDataURL(input.files[index])

          index++;
        }
      }
      console.log('DATI PER MATTIA! => ',this.preview_list);
    },
    reset: function() {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    },
  },
};
</script>
