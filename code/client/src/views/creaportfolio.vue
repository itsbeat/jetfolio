<template>
  <div id="app">
    <div class="wrapper flex mb-36">
      <div class="lg:w-2/4 sm:w-full bg-white font-sans text-gray-700 ml-16">
        <div class="container mx-auto p-8 flex"></div>
            <h1 class="text-indigo-600 text-3xl text-center mb-3">Carica il tuo portfolio</h1>
        <div class="container m-auto bg-indigo-100 rounded-2xl p-6">
          <div class="col-md-5 text-center inline">
            <label for="my-file" class="text-indigo-600 block mb-6"
              >Scegli o trascina un'immagine</label
            >
            <form>
              <div class="form-group">
                <input
                  type="file"
                  accept="image/*"
                  multiple="multiple"
                  @change="previewMultiImage"
                  class="custom-file-input"
                  id="my-file"
                />

                <div class="border p-2 mt-3 w-full flex">
                  <template v-if="preview_list.length">
                    <div
                      class="flex flex-col mx-8"
                      v-for="(item, index) in preview_list"
                      :key="index"
                    >
                      <img :src="item" class="img-fluid ml-16" />
                      <div class="flex flex-col justify-start">
                        <p>Nome file: {{ image_list[index].name }}</p>
                        <p>
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
      <div class="lg:inline-block w-2/6  px-8 mx-8">
        <div class="flex justify-center">
          
            <!-- Modal container -->
            <div
              class="w-full mx-auto px-4 sm:px-6 lg:px-8"
            >
              <!-- Card container -->
              <form
                class="px-8 py-6 space-y-6 overflow-hidden bg-white rounded-md shadow-lg"
              >
                <!-- Card heading -->
                <div class="flex justify-between">
                  <div class="space-y-2">
                    <h2 class="font-bold text-gray-900">Nome</h2>
                    <p class="text-sm font-medium leading-5 text-gray-500">
                      <input type="text" placeholder="Inserisci il tuo nome" />
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
                        <div class="relative flex">
                          <select
                            id="currency"
                            name="currency"
                            class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                          >
                            <option>Programmazione</option>
                            <option>Grafica</option>
                            <option>Iot</option>
                            <option>User Design</option>
                          </select>
                        </div>
                      </div>
                      <label class="flex items-center mt-6 space-x-1.5">
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
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  class="max-w-md grid grid-flow-row sm:grid-cols-2 gap-3 sm:gap-6"
                >
                  <button
                    type="button"
                    class="px-4 py-3 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-600 transition duration-300 ease-in-out"
                  >
                    Elimina
                  </button>
                  <button
                    type="button"
                    class="px-4 py-3 border border-transparent rounded text-white bg-indigo-600 hover:bg-indigo-500 transition duration-300 ease-in-out"
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
.custom-file-input {
  border: 2px solid black;
}
.img-fluid {
  max-width: 30%;
  max-height: 100px;
}
</style>
<script>
export default {
  data: function () {
    return {
      preview: null,
      image: null,
      modalOpen: true,
      advancedSettings: false,
      preview_list: [],
      image_list: [],

      flowType: {
        selected: "",
      },
    };
  },
  methods: {
    previewMultiImage: function (event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);

          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    reset: function () {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    },
  },
};
</script>
