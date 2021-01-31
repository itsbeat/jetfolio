<template>
  <div class="home">
    <!-- HOME SEARCH -->
    <section class="search-sec">
       <div class="md:flex md:justify-center sm:justify-none mb-5">
       <div class="flex md:justify-center sm:justify-start search-bar  relative md:w-6/12 sm:w-1">
        <input
          class="w-full p-3 rounded-3xl md:pl-40 pl-28 border-2 border-indigo-600 focus:outline-none"
          placeholder="Scopri nuovi portfolio!"
          type="text"
          id="search"
        />
        <select
          id="category"
          class="absolute lg:left-6 md:left-6 left-2 md:mt-4 mt-4 rounded-2xl border-2 border-indigo-600 focus:outline-none"
        >
          <option value="design">Artworks</option>
          <option value="design">Design</option>
          <option value="coding">Coding</option>
          <option value="IOT">IOT</option>
        </select>
        <button id="btn-search" class="absolute right-6 focus:outline-none" style="top: 25%">
          <img src="../assets/search.svg" />
        </button>
      </div>
      </div>
    <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
        <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">

          <img :src="slide"/>

        </div>
        <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
        <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
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
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />
            </a>

            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" href="#">
                  {{ project.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">Creato: 11/1/19</p>
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
                <p class="ml-2 text-sm">Author Name</p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden"
                  >{{ project.like_count
                  }}<img class="w-5 inline ml-3" src="../assets/like.svg"
                /></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="w-8 h-8 color_custom"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
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
            <a href="#">
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
                <a class="no-underline hover:underline text-black" href="#">
                  {{ project.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">Creato: 11/1/19</p>
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
                <p class="ml-2 text-sm">Author Name</p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden"
                  >{{ project.like_count
                  }}<img class="w-5 inline ml-3" src="../assets/like.svg"
                /></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="w-8 h-8 color_custom"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
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
        I più visti
      </h1>
  <div class="scrolling-wrapper">
     <div
          class="my-1 px-1 w-full md:w-1/4 lg:my-4 lg:px-4 lg:w-1/5 inline-block"
          v-for="project in recentProjects"
          :key="project.id"
        >
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
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
                <a class="no-underline hover:underline text-black" href="#">
                  {{ project.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">Creato: 11/1/19</p>
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
                <p class="ml-2 text-sm">Author Name</p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden"
                  >{{ project.like_count
                  }}<img class="w-5 inline ml-3" src="../assets/like.svg"
                /></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="w-8 h-8 color_custom"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </footer>
          </article>
          <!-- END Article -->
        </div>
  </div>
  
  
</section>
<section class="content">
   <h1
        class="ml-12 mb-0 mt-0 text-3xl font-bold uppercase tracking-wide text-indigo-800"
      >
      d'ispirazione
      </h1>
  <div class="scrolling-wrapper">
     <div
          class="my-1 px-1 w-full md:w-1/4 lg:my-4 lg:px-4 lg:w-1/5 inline-block"
          v-for="project in recentProjects"
          :key="project.id"
        >
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
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
                <a class="no-underline hover:underline text-black" href="#">
                  {{ project.title }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">Creato: 11/1/19</p>
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
                <p class="ml-2 text-sm">Author Name</p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden"
                  >{{ project.like_count
                  }}<img class="w-5 inline ml-3" src="../assets/like.svg"
                /></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="w-8 h-8 color_custom"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </footer>
          </article>
          <!-- END Article -->
        </div>
  </div>
  <footer class="footer bg-gray-600 py-4 sm:py-2">
  <div class="container mx-auto px-4">
    <div class="sm:flex sm:flex-wrap">
      <div class="sm:w-full px-4 md:w-1/6">
        <img
          src="../assets/logo-jet.png"
          class="fill-current absolue md:ml-10 sm:ml-0"
          width="80"
          height="100"
        />
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-6">
        <h6 class="font-bold mb-2">Sede</h6>
        <address class="not-italic mb-4 text-sm">
          311 Verona<br>
         Via lungadige Galtarossa, 6
        </address>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-6">
        <h6 class="font-bold mb-2">Riconoscimenti</h6>
        <p class="mb-4 text-sm">Sviluppato dal team <strong>Bit</strong>.<br>
          <em >Tutti i diritti riservati</em></p>
      </div>
      <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-6">
        <h5 class="text-xl font-bold mb-2 sm:text-center xl:text-left">Seguici sui social</h5>
        <div class="flex sm:justify-center xl:justify-start">
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-black hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-black hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-black hover:text-white hover:bg-red-600 hover:border-red-600">
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  
</section>
  </div>
</template>
<style >
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
.scrolling-wrapper, .scrolling-wrapper-flexbox {
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
.agile__dot--current button, .agile__dot:hover button {
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
import { VueAgile } from 'vue-agile'
export default {
  name: "Home",
  components: {
    agile: VueAgile,
  },
  
  data() {
    return {
      error: null,
      recentProjects: [],
      popularProjects: [],
			asNavFor1: [],
			options1: {
				dots: true,
				fade: true,
        autoplay:true,
				navButtons: true,
        changeDelay:"2000",
        autoplaySpeed:"4300",
      },
      slides: [
					'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
					'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
					'https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
					'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
					'https://images.unsplash.com/photo-1483782817618-9804403024ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1546&q=80',
					'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
					'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80'
				]
		}
  },
  methods: {
    async logout() {
      return await this.$api.post("/logout");
    },
    // async getProjects() {
    //   return await this.$api.get('/projects');
    // },
    async getPopularProjects() {
      let response = await this.$api.get("/projects/recent/6");
      this.popularProjects = response.data;
    },
    async getRecentProjects() {
      let response = await this.$api.get("/projects/popular/12");
      this.recentProjects = response.data;
    },
  },
  mounted() {
    this.getPopularProjects();
    this.getRecentProjects();
    this.asNavFor1.push(this.$refs.main)
  },
  
};
</script>

