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
              src="../assets/stockprofile.jpg"
              alt="profile"
            />
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
                  v-model="profile.user_info.phone"
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
              v-model="profile.user_info.biography"
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
                profile.user_info.follower_count
              }}</span>
              Followers
            </li>

            <li>
              <span class="font-semibold text-gray-800 block">{{
                profile.user_info.follow_count
              }}</span>
              Follow
            </li>
            <li>
              <span class="font-semibold text-gray-800 block">{{
                profile.user_info.prj_count
              }}</span>
              Portfolio
            </li>
          </ul>

          <!-- insta freatures 
      <ul class="flex md:hidden items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t">

        <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
          <a class="inline-block p-3" href="#">
            <i class="fas fa-th-large text-xl md:text-xs"></i>
            <span class="hidden md:inline">post</span>
          </a>
        </li>
        <li>
          <a class="inline-block p-3" href="#">
            <i class="far fa-square text-xl md:text-xs"></i>
            <span class="hidden md:inline">igtv</span>
          </a>
        </li>
        <li>
          <a class="inline-block p-3" href="#">
            <i class="fas fa-user border border-gray-500
                             px-1 pt-1 rounded text-xl md:text-xs"></i>
            <span class="hidden md:inline">tagged</span>
          </a>
        </li>
      </ul>
      -->
          <!-- flexbox grid -->
          <div class="flex flex-wrap -mx-px md:-mx-3">
            <!-- column -->
            <div class="w-1/3 p-px md:px-3 ">
              <!-- post 1-->
              <a href="#">
                <article
                  class="post bg-gray-100 text-white relative pb-full md:mb-6"
                >
                  <!-- post image-->
                  <img
                    class="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />

                  <i class="fas fa-square absolute right-0 top-0 m-1"></i>
                  <!-- overlay-->
                  <div
                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                  >
                    <div
                      class="flex justify-center items-center 
                                    space-x-4 h-full"
                    >
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        412K
                      </span>

                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        2,909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>

            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <!-- post 2 -->
                <article
                  class="post bg-gray-100 text-white relative pb-full md:mb-6"
                >
                  <img
                    class="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />

                  <!-- overlay-->
                  <div
                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                  >
                    <div
                      class="flex justify-center items-center 
                                    space-x-4 h-full"
                    >
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        412K
                      </span>

                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        1,993
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>

            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <article
                  class="post bg-gray-100 text-white relative pb-full  md:mb-6"
                >
                  <img
                    class="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />
                  <!-- overlay-->
                  <div
                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                  >
                    <div
                      class="flex justify-center items-center 
                                    space-x-4 h-full"
                    >
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        112K
                      </span>

                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        2,090
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>

            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <article
                  class="post bg-gray-100 text-white relative pb-full md:mb-6"
                >
                  <img
                    class="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />

                  <i class="fas fa-video absolute right-0 top-0 m-1"></i>

                  <!-- overlay-->
                  <div
                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                  >
                    <div
                      class="flex justify-center items-center 
                                    space-x-4 h-full"
                    >
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        841K
                      </span>

                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>

            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <article
                  class="post bg-gray-100 text-white relative pb-full md:mb-6"
                >
                  <img
                    class="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="image"
                  />
                  <!-- overlay-->
                  <div
                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                  >
                    <div
                      class="flex justify-center items-center 
                                    space-x-4 h-full"
                    >
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        120K
                      </span>

                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        3,909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
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
      edit: false,
      profile: {
        id: null,
        username: null,
        email: null,
        user_info: {
          biography: null,
          image_url: null,
          follow_count: null,
          follower_count: null,
          prj_count: null,
          phone: null,
        },
      },
    };
  },
  components: {},
  mounted() {
    if (localStorage.getItem("user")) {
      this.profilo();
    } else {
      router.push("/login");
    }
  },
  methods: {
    async editInfo() {
     await this.$api.post("/users/edit",
        this.profile,
        console.log(this.profile),
        );
        return this.profile
  },
    async profilo() {
      try {
        const ls = JSON.parse(localStorage.getItem("user"));
        this.info = await this.$api.get(`/users/profile/${ls.id}`);

        this.profile = this.info.data;
        console.log(this.info.data);
        console.log(this.profile);
      } catch (error) {
        this.error = "Errore generico.";
      }
    },
  },
};
</script>
