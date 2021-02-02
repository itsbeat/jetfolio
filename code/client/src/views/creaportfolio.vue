<template>
  <div id="app">
    <div class="w-6/12 text-center inline">
        <h1 class="mb-3 text-indigo-600 text-3xl uppercase">Carica il tuo portfolio</h1>
      </div>
      <div class="container m-auto bg-indigo-100 rounded-2xl p-6">
      

      <div class="col-md-5 text-center inline">
        
            <label for="my-file" class="text-indigo-600 block mb-6">Scegli o trascina un'immagine</label>
        <form>
          <div class="form-group ">
            <input
              type="file"
              accept="image/*"
              multiple="multiple"
              @change="previewMultiImage"
              class="custom-file-input"
              
              id="my-file"
            />
            

            <div class=" border p-2 mt-3 w-full flex">
              <p>Stai caricando:</p>
              <template v-if="preview_list.length">
                <div class="flex flex-col mx-8" v-for="(item, index) in preview_list" :key="index">
                  <img :src="item" class="img-fluid ml-16" />
                  <div class="flex flex-col justify-start">
                  <p >Nome file: {{ image_list[index].name }}</p>
                  <p >Dimensione file: {{(image_list[index].size / 1024).toFixed(3) }}KB</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </form>

      <div class="col-12 mt-3 text-center">
        <p class="text-primary">
        </p>
       <button class="p-2 mb-4 focus:outline-none border-2 border-red-600 bg-red-600 text-white border-opacity-100 rounded-3xl " @click="reset">Cancella</button>
      </div>
    </div>
    </div>
 <div id="app" class="antialiased h-full mb-6 pt-2 bg-gray-100">
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <!-- Modal container -->
      <div v-if="modalOpen" class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Card container -->
        <form
          class="px-8 py-6 space-y-6 overflow-hidden bg-white rounded-md shadow-lg transition duration-300 ease-in-out transform"
        >
          <!-- Card heading -->
          <div class="flex justify-between">
            <div class="space-y-1">
              <h2 class="font-bold text-gray-900">Nome</h2>
              <p class="text-sm font-medium leading-5 text-gray-500">
                <input type="text" placeholder="Inserisci il tuo nome" class=""
                >
              </p>
            </div>
            <div>
              <button
                type="button"
                class="flex flex-col items-center text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out"
                @click="modalOpen = false"
              >
                <svg
                  class="w-7 h-7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span
                  class="text-xs font-semibold text-center leading-3 uppercase"
                  >Esc</span
                >
              </button>
            </div>
          </div>
          <!-- Flow options -->
          <div class="space-y-6">
            <div class="space-y-4">
              <label class="block space-y-2">
                <span
                  class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                  >Flow Name</span
                >
                <input
                  type="text"
                  placeholder="Name your flow"
                  class="max-w-md w-full form-input rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                />
              </label>
              <div class="flex items-center space-x-6">
                <div class="space-y-1">
                  <label for="flow-name" class="text-sm font-medium leading-5 text-gray-600">
                    Flow Start Delay
                  </label>
                  <div class="relative flex">
                    <input
                      type="number"
                      id="flow-name"
                      name="flow-name"
                      value="300"
                      class="w-0 flex-1 pr-8 form-input rounded text-gray-900 placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                    <div
                      class="absolute inset-y-0 right-0 pr-2 flex items-center"
                    >
                      <span class="text-sm leading-5 text-gray-500">ms</span>
                    </div>
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
                      >Traversable</span
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
            <div class="max-w-md space-y-3">
              <button
                type="button"
                class="flex items-center space-x-1"
                @click="advancedSettings = !advancedSettings"
              >
                <svg
                  :class="{ 'rotate-90': advancedSettings }"
                  class="w-4 h-4 text-gray-900 transition duration-150 ease-in-out transform"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
                <span
                  class="text-xs font-bold leading-4 tracking-wide uppercase text-gray-600 hover:text-gray-500 transition duration-150 ease-in-out"
                  >Advanced settings</span
                >
              </button>
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div v-show="advancedSettings" class="space-y-4">
                  <fieldset class="space-y-2">
                    <legend class="text-sm leading-5 text-gray-600">
                      Select how this flow should be shown.
                    </legend>

                    <div class="grid sm:grid-cols-3 gap-3">
                      <label
                        v-for="option in flowType.options"
                        :key="option.id"
                        :class="{
                          'bg-gray-50 border-indigo-500 text-gray-600':
                            flowType.selected === option.name
                        }"
                        class="relative flex flex-col items-center justify-center px-4 py-3 border border-gray-200 rounded text-center text-gray-500 bg-white hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-600 transition duration-300 ease-in-out cursor-pointer"
                      >
                        <input
                          @change="updateOption(option.name)"
                          type="checkbox"
                          class="absolute inset-0 w-full h-full form-checkbox appearance-none invisible"
                        />
                        <span class="block">{{ option.name }}</span>
                        <span
                          v-if="option.advanced"
                          class="px-3 py-1 rounded-full text-xs font-medium leading-4 bg-gray-50"
                          >Advanced</span
                        >
                      </label>
                    </div>
                  </fieldset>
                  <fieldset v-if="flowType.selected === 'URL'" class="space-y-4">
                    <legend class="sr-only">URL Options</legend>
                    <div class="space-y-3 sm:flex sm:items-center sm:space-x-3 sm:space-y-0">
                      <label class="block">
                        <span class="sr-only">Starts with</span>
                        <select
                          class="w-full form-select text-gray-900 rounded sm:text-sm sm:leading-5"
                        >
                          <option>Starts with</option>
                        </select>
                      </label>
                      <label class="block sm:flex-1">
                        <span class="sr-only">Prefix</span>
                        <input
                          type="text"
                          placeholder="/"
                          class="w-full form-input rounded sm:text-sm sm:leading-5"
                        />
                      </label>
                    </div>
                    <button type="button" class="block text-sm leading-5 text-indigo-500 hover:text-indigo-600 transition duration-150 ease-in-out">+ Add another</button>
                    <div class="px-6 py-5 rounded-md bg-gray-100">
                      <p class="text-sm leading-5 text-center text-gray-600">This flow will be shown only on the specific page or pages you provide.</p>
  </div>            
                  </fieldset>
                </div>
              </transition>
            </div>
          </div>
          <div class="max-w-md grid grid-flow-row sm:grid-cols-2 gap-3 sm:gap-6">
            <button type="button" class="px-4 py-3 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-600 transition duration-300 ease-in-out">Cancel</button>
            <button type="button" class="px-4 py-3 border border-transparent rounded text-white bg-indigo-600 hover:bg-indigo-500 transition duration-300 ease-in-out" @click="modalOpen = false">Pubblica</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
  </div>  
</template>
<style>
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input{
  border: 2px solid black;
}
.img-fluid{
  max-width: 30%;
  max-height: 100px;
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
    
      flowType: {
        selected: "",
        options: [
          {
            id: 1,
            name: "Auto",
            advanced: false
          },
          {
            id: 2,
            name: "URL",
            advanced: false
          },
          {
            id: 3,
            name: "Manual",
            advanced: true
          }
        ]
      }
    };
  },
  methods: {
    previewMultiImage: function(event) {
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
    reset: function() {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    },
  },
   updateOption(name) {
      if (this.flowType.selected !== name) {
        this.flowType.selected = name;
      } else if (this.flowType.selected === name) {
        this.flowType.selected = "";
      }
    },
  watch: {
    // This is only to reopen the modal automatically for presentation purposes
    modalOpen() {
      if (this.modalOpen === false) {
        return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
          this.modalOpen = true
        })
      }
    }
    },
};
</script>
