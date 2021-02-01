<template>
  <div id="app" class="flex justify-center w-1/4 ">
    <div class="row">
      <div class="w-6/12 text-center inline">
        <h1 class="mb-3">Sezione di carimento progetto</h1>
      </div>

      <div class="col-md-5">
        <form>
          <div class="form-group">
            <label for="my-file">Seleziona una o più immagini</label>
            <input
              type="file"
              accept="image/*"
              multiple="multiple"
              @change="previewMultiImage"
              class="form-control-file"
              id="my-file"
            />

            <div class="border p-2 mt-3 w-full">
              <p>Stai caricando:</p>
              <template v-if="preview_list.length">
                <div v-for="(item, index) in preview_list" :key="index">
                  <img :src="item" class="img-fluid" />
                  <p class="mb-0">Nome file: {{ image_list[index].name }}</p>
                  <p>Grandezza file: {{ image_list[index].size / 1024 }}KB</p>
                </div>
              </template>
            </div>
          </div>
        </form>
      </div>

      <div class="w-100"></div>
      <div class="col-12 mt-3 text-center">
        <p class="text-primary">
        </p>
       <button class="p-2 mb-4 focus:outline-none border-2 border-red-600 bg-red-600 text-white border-opacity-100 rounded-3xl " @click="reset">Cancella</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      preview: null,
      image: null,
      preview_list: [],
      image_list: [],
    };
  },
  methods: {
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
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
};
</script>
