<template>
  <div class="home">
    <main class="bg-gray-100 bg-opacity-25">
      <div class="lg:w-8/12 lg:mx-auto mb-2">
        <header class="flex flex-wrap items-center p-4 md:py-8">
          <div class="md:w-3/12 md:ml-1">
            <!-- profile image -->
            <img
              class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                  border-2 border-indigo-600 p-1"
              :src="imageUrlSrc"
              alt="profile"
              v-if="this.profile.info.image_url"
            />
            <div class="col-md-6" :hidden="!edit">
              <input type="file" v-on:change="onImageChange" class="form-control">
            </div>
          </div>

          <!-- profile meta -->
          <div class="md:w-4/12 sm:6/12 md:ml-2 classe">
            <h1 class="text-2xl text-center mb-6 modificaprof" :hidden="!edit">
              Modifica del profilo
            </h1>
            <div class="md:flex md:flex-wrap md:items-center mb-2 md_ml-4 ">
              <div>
                <span
                  class="color_custom z-10 h-10 leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="username"
                  size="26"
                  v-model="profile.username"
                  :disabled="!edit"
                  v-bind:class="edit === true ? 'modifica' : 'null'"
                  class="bg-transparent px-3 py-3 block w-full p-2.5 relative focus:outline-none focus:shadow-outline w-full pl-10"
                />
              </div>
            </div>
            <div class="md:flex md:flex-wrap md:items-center mb-2">
              <div>
                <span
                  class="color_custom z-10 h-10 leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="username"
                  size="26"
                  v-model="profile.email"
                  :disabled="!edit"
                  v-bind:class="edit === true ? 'modifica' : 'null'"
                  class="bg-transparent px-3 py-3 block w-full p-2.5 relative focus:outline-none focus:shadow-outline pl-10"
                >
              </div>
            </div>
            <div class="md:flex md:flex-wrap md:items-center mb-2">
              <div>
                <span
                  class="color_custom z-10 h-10 leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="numero"
                  size="26"
                  v-model="profile.info.phone"
                  :disabled="!edit"
                  v-bind:class="edit === true ? 'modifica' : 'null'"
                  class="bg-transparent px-3 py-3 block w-full p-2.5 relative focus:outline-none focus:shadow-outline w-full pl-10"
                >
              </div>
            </div>
          </div>
          <div class="md:w-4/12 sm:w-12/12 text-sm my-2 mx-auto">
            <div
              class="md:w-96 md:p-6 sm:w-34 text-center border-4 rounded-3xl border-indigo-600 border-opacity-0 bg-indigo-100"
            >
              <h1 class="font-bold text-md color_custom">BIOGRAFIA</h1>
              <textarea 
              v-model="profile.info.biography"
              v-bind:class="edit === true ? 'custom' : 'null'"
              rows="5"
              :disabled="!edit"
              class="md:text-left md:w-full md:bg-indigo-100 sm:text-center sm-text-sm"
                >
              </textarea>
            </div>
          </div>
        </header>
        <div class="flex justify-center ...">
          <button
            class="p-2 mb-4 focus:outline-none border-2 border-indigo-300 border-opacity-100 rounded-3xl  color_custom"
            @click="edit = !edit"
            :hidden="edit"
          >
            Modifica Profilo
          </button>
          <button
            class="p-2 mb-4 focus:outline-none border-none text-gray-400 rounded-3xl mr-3 hover: text-gray-600"
            :hidden="!edit"
            @click="edit = !edit"
          >
            Annulla
          </button>

          <button
            class="p-2 mb-4 focus:outline-none border-2 border-green-600 bg-green-600 text-white border-opacity-100 rounded-3xl "
            :hidden="!edit"
            @click="editInfo()"
          >
            Salva
          </button>
        </div>

        <!-- posts -->
        <div class="px-px md:px-3 ">
          <!-- user following for mobile only -->
          <ul
            class="flex justify-around space-x-8 border-t text-center p-1 text-gray-600 leading-snug text-sm md:bg-indigo-100 md:rounded-full md:mb-6 mt-7"
          >
            <li>
              <span class="font-semibold text-gray-800 block">{{
                profile.info.follower_count
              }}</span>
              Followers
            </li>

            <li>
              <span class="font-semibold text-gray-800 block">{{
                profile.info.follow_count
              }}</span>
              Follow
            </li>
            <li>
              <span class="font-semibold text-gray-800 block">{{this.projectId.length}}</span>
              Portfolio
            </li>
          </ul>

          <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          v-for="p in projectId"
          :key="p.id"
        >
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                :src="'http://localhost:8000/storage/' + p.project_content[0].image_url"
              />
            </a>

            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" href="#">
                  {{ p.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">{{p.created_at.slice(0,10)}}</p>
            </header>
          </article>
          <!-- END Article -->
        </div>
        <!-- END Column -->
      </div>
    </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style>
.pb-full {
  padding-bottom: 100%;
}
.color_custom {
  color: #383088;
}

/* hide search icon on search focus */
.search-bar:focus + .fa-search {
  display: none;
}

@media screen and (min-width: 768px) {
  .post:hover .overlay {
    display: block;
  }
}
@media screen and (max-width: 500px) {
  .classe {
    margin-left: 15%;
  }
}
.modifica {
  border: 1px solid gray;
  width: 120%;
}
@media screen and (min-width: 768px) {
  .modifica {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .modifica {
    width: 80%;
  }
}
@media screen and (max-width: 600px) {
  .modifica {
    width: 60%;
  }
}
.modificaprof {
  border-bottom: 2px solid red;
}
.custom{
  background-color:rgba(255, 255, 255, 0.8);
  outline: none;
}

</style>

<script>
import router from "../router";

export default {
  name: "Profilo",
  data() {
    return {
      projectId: [],
      image:'',
      edit: false,
      profile: {
        id: null,
        username: null,
        email: null,
        info: {
          biography: null,
          image_url: "",
          follow_count: null,
          follower_count: null,
          prj_count: null,
          phone: null,
        },
      },
    };
  },
  async mounted() {
    const ls = JSON.parse(localStorage.getItem("user"));
    let response = await this.$api.get(`/projects/${ls.id}`);
    this.projectId = response.data;
    console.log(this.projectId);
    this.profile.info.prj_count = this.projectId.length;
    console.log(this.profile.info.prj_count);
    if (localStorage.getItem("user")) {
      this.profilo();
    } else {
      router.push("/login");
    }
  },
  computed:{
    imageUrlSrc(){
      return "http://localhost:8000/storage/"+ this.profile.info.image_url;
    },
    // imageUrlId(){
    //   console.log(this.projectId);
      
    //     return "http://localhost:8000/storage/"+ this.projectId[0].project_content[0].image_url;
    // },
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
    async editInfo() {
        let response = await this.$api.post("/users/edit", {
          profile: this.profile,
          image: this.image,
        });
        this.profile = response.data.profile;
        this.edit = false
        location.reload();
  },
    async profilo() {
      try {
        const ls = JSON.parse(localStorage.getItem("user"));
        this.info = await this.$api.get(`/users/profile/${ls.id}`);

        this.profile = this.info.data;
      } catch (error) {
        this.error = "Errore generico.";
      }
    },
  },
};
</script>
