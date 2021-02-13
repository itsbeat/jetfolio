<template>
  <div class="home">
    <!-- HOME SEARCH -->
    <section class="search-sec">
      <div class="md:flex md:justify-center sm:justify-none mb-5">
        <div
          class="flex md:justify-center sm:justify-start search-bar  relative md:w-6/12 sm:w-1"
        >
          <input
            class="w-full p-3 rounded-3xl md:pl-40 pl-28 border-2 border-indigo-600 focus:outline-none"
            placeholder="Scopri nuovi portfolio!"
            type="text"
            id="search"
          />
          <select
            id="category"
            class="absolute lg:left-6 md:left-6 left-2 md:mt-3 mt-3 rounded-2xl border-2 border-indigo-600 focus:outline-none"
          >
            <option value="design">Artworks</option>
            <option value="design">Design</option>
            <option value="coding">Coding</option>
            <option value="IOT">IOT</option>
          </select>
          <button
            id="btn-search"
            class="absolute right-6 focus:outline-none"
            style="top: 25%"
          >
            <img src="../assets/search.svg" />
          </button>
        </div>
      </div>
      <agile
        class="main"
        ref="main"
        :options="options1"
        :as-nav-for="asNavFor1"
      >
        <div
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="`slide--${index}`"
        >
          <img :src="slide" />
        </div>
        <template slot="prevButton"
          ><i class="fas fa-chevron-left"></i
        ></template>
        <template slot="nextButton"
          ><i class="fas fa-chevron-right"></i
        ></template>
      </agile>
    </section>
    <h1
      class="ml-12 mb-0 mt-6 text-3xl font-bold uppercase tracking-wide text-indigo-800"
    >
      progetti popolari
    </h1>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          v-for="project in popularProjects"
          :key="project.id"
        >
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">
            <a @click="goProjectDetail(project.id)">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                :src="'http://localhost:8000/storage/' + project.project_content[0].image_url"
              />
            </a>

            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" @click="goProjectDetail(project.id)">
                  {{ project.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">{{project.created_at.slice(0,10)}}</p>
            </header>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <img
                  alt="Placeholder"
                  class="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p class="ml-2 text-sm">{{project.user.username}}</p>
              </a>
              <a
                class="flex items-center justify-between leading-none "
               href="#"
              >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="w-8 h-8 color_custom ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                  
                  
                </svg>
                <p class=" text-md">
                      {{ project.like_count}}
                </p>
              </a>
            </footer>
          </article>
          <!-- END Article -->
        </div>
        <!-- END Column -->
      </div>
    </div>
    <section class="content">
      <h1
        class="ml-12 mb-0 mt-6 text-3xl font-bold uppercase tracking-wide text-indigo-800"
      >
        progetti recenti
      </h1>
      <div class="scrolling-wrapper">
        <div
          class="my-1 px-1 w-full md:w-1/5 lg:my-4 lg:px-4 lg:w-1/5 sm:1/ inline-block"
          v-for="project in recentProjects"
          :key="project.id"
        >
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">
            <a @click="goProjectDetail(project.id)">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                :src="'http://localhost:8000/storage/' + project.project_content[0].image_url"
              />
            </a>

            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-sm">
                <a class="no-underline hover:underline text-black" @click="goProjectDetail(project.id)">
                  {{ project.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">{{project.created_at.slice(0,10)}}</p>
            </header>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <a
                class="flex items-center no-underline hover:underline text-black"
                @click="goProjectDetail(project.id)"
              >
                <img
                  alt="Placeholder"
                  class="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p class="ml-2 text-sm">{{project.user.username}}</p>
              </a>
              <a
                class="flex items-center justify-between leading-none "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="w-8 h-8 color_custom ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <p class=" text-md">
                  {{ project.like_count }}
                </p>
              </a>
            </footer>
          </article>
          <!-- END Article -->
        </div>
      </div>
      <!--Progetti 3-->
    </section>

    <section class="content">
      <h1
        class="ml-12 mb-0 mt-0 text-3xl font-bold uppercase tracking-wide text-indigo-800"
      >
        Lista progetti
      </h1>
      <div class="scrolling-wrapper">
        <div
          class="my-1 px-1 w-full md:w-1/4 lg:my-4 lg:px-4 lg:w-1/5 inline-block"
          v-for="project in recentProjects"
          :key="project.id"
        >
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">
            <a @click="goProjectDetail(project.id)">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />
            </a>

            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-sm">
                <a class="no-underline hover:underline text-black" @click="goProjectDetail(project.id)">
                  {{ project.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">{{project.created_at.slice(0,10)}}</p>
            </header>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <a
                class="flex items-center no-underline hover:underline text-black"
                @click="goProjectDetail(project.id)"
              >
                <img
                  alt="Placeholder"
                  class="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p class="ml-2 text-sm">Author name</p>
              </a>

              <a
                class="flex items-center justify-between leading-none "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="w-8 h-8 color_custom ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <p class=" text-md">
                  {{ project.like_count }}
                </p>
              </a>
            </footer>
          </article>
          <!-- END Article -->
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.scrolling-wrapper,
.scrolling-wrapper-flexbox {
  height: 420px;
  margin-bottom: 20px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
:hover::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar {
  display: none;
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 450px;
  justify-content: center;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}
</style>

<script>
import { VueAgile } from "vue-agile";


export default {
  name: "Home",
  components: {
    agile: VueAgile,
  },

  data() {
    return {
      image_url:'',
      error: null,
      recentProjects: [],
      popularProjects: [],
      randomProjects:[],
      asNavFor1: [],
      options1: {
        dots: true,
        fade: true,
        autoplay: true,
        navButtons: true,
        changeDelay: "2000",
        autoplaySpeed: "4300",
      },
      slides: [
        "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1483782817618-9804403024ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1546&q=80",
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80",
      ],
    };
  },
  methods: {
    async logout() {
      return await this.$api.post("/logout");
    },
    async getPopularProjects() {
      let response = await this.$api.get("/projects/recent/6");
      this.popularProjects = response.data;
    },
    async getRecentProjects() {
      let response = await this.$api.get("/projects/popular/12");
      this.recentProjects = response.data;
    },
    // async getRandomProjects() {
    //   let response = await this.$api.get("/projects/random/12");
    //   this.randomProjects = response.data;
    //   console.log('mattia bravo => ', this.randomProjects);
    // },

    goProjectDetail(val){
      this.$router.push({
        name: 'projectdetail',
        params:{
          id: val,
        },
      });
    }
  },
  mounted() {
    this.getPopularProjects();
    this.getRecentProjects();
    // this.getRandomProjects();
    this.asNavFor1.push(this.$refs.main);
    
  },
  computed:{
    // imagePopularProject(){
    //   console.log(this.popularProjects)
    //   if(this.popularProjects.length > 0){
    //     return "http://localhost:8000/storage/"+ this.popularProjects[0].project_content[0].image_url;
    //   } else{
    //     return "https://picsum.photos/600/400/?random"
    //   }
    // },
    // imageRecentProgect(){
    //   console.log(this.recentProjects)
    //   if(this.recentProjects){
    //     // var i;
    //     // for ( i = 0; i <= this.recentProjects.length; i++){
    //       return "http://localhost:8000/storage/"+ this.recentProjects[0].project_content[0].image_url;
    //     // };
    //   } else{
    //     return "https://picsum.photos/600/400/?random"
    //   }
    // }
  }
};
</script>
