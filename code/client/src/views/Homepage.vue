<template>
  <div class="home">
    <!-- HOME SEARCH -->
    <div class="hero-search h-80 bg-gray-200 flex justify-center items-center">
      <div class="search-bar relative w-6/12">
        <input
          class="w-full p-3 rounded-3xl pl-36 border-2 border-indigo-600"
          placeholder="Scopri nuovi portfolio!"
          type="text"
          id="search"
        />
        <select
          id="category"
          class="absolute left-6 p-1 rounded-2xl border-2 border-indigo-600"
          style="top: 15%"
        >
          <option value="design">Artworks</option>
          <option value="design">Design</option>
          <option value="coding">Coding</option>
          <option value="IOT">IOT</option>
        </select>
        <button id="btn-search" class="absolute right-6" style="top: 25%">
          <img src="../assets/search.svg" />
        </button>
      </div>
    </div>
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
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 inline-block"
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
  </div>
  <!--Progetti 3-->
  
</section>
<section class="content">
   <h1
        class="ml-12 mb-0 mt-0 text-3xl font-bold uppercase tracking-wide text-indigo-800"
      >
        I piu visti
      </h1>
  <div class="scrolling-wrapper">
     <div
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 inline-block"
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
  </div>
  
  
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
  height: 700px;
  margin-bottom: 20px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  
}
:hover::-webkit-scrollbar {
    display: none;
  }
</style>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      error: null,
      recentProjects: [],
      popularProjects: [],
    };
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
  },
};
</script>

