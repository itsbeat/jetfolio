<template>
  <div class="home">
    <!-- HOME SEARCH -->
    <div class="hero-search h-80 bg-gray-200 flex justify-center items-center">
        <div class="search-bar relative w-6/12">
          <input class="w-full p-3 rounded-3xl pl-36 border-2 border-indigo-600" placeholder= "Scopri nuovi portfolio!" type="text" id="search">
          <select id="category" class="absolute left-6 p-1 rounded-2xl border-2 border-indigo-600" style="top: 15%">
            <option value="design">Artworks</option>
            <option value="design">Design</option>
            <option value="coding">Coding</option>
            <option value="IOT">IOT</option>
          </select>
          <button id="btn-search" class="absolute right-6" style="top: 25%"><img src="../assets/search.svg"></button>
        </div>
    </div>
    <div class="projects m-10 ml-20">
      <!-- DISPLAY RECENT PROJECTS -->
      <h1 class="mb-5 text-2xl font-bold uppercase tracking-wide text-indigo-800">progetti recenti</h1>
      <div class="recent-projects flex flex-wrap">
        <div v-for="project in recentProjects" :key="project.id" class="project-card w-80 mr-5 mb-5 relative">
            <img class="rounded-lg" src="https://via.placeholder.com/1920x1080">
            <div class="flex justify-between absolute bottom-0 ml-5 mb-3 w-9/12">
              <h2 class="font-bold text-white">{{ project.title }}</h2>
              <div class="flex items-center text-white"><p class="inline text-lg">{{ project.like_count }}</p><img class="w-5 inline ml-3" src="../assets/like.svg"></div>
            </div>
        </div>
        
      </div>
      <!-- DISPLAY POPULAR PROJECTS -->
      <h1 class="mt-10 mb-5 text-2xl font-bold uppercase tracking-wide text-indigo-800">i più popolari</h1>
      <div class="recent-projects flex flex-nowrap">
        <div v-for="project in popularProjects" :key="project.id" class="project-card w-80 mr-5 relative">
            <img class="rounded-lg" src="https://via.placeholder.com/1920x1080">
            <div class="flex justify-between absolute bottom-0 ml-5 mb-3 w-9/12">
              <h2 class="font-bold text-white">{{ project.title }}</h2>
              <div class="flex items-center text-white"><p class="inline text-lg">{{ project.like_count }}</p><img class="w-5 inline ml-3" src="../assets/like.svg"></div>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  name: 'Home',
  components: {
    
  },
  data(){
      return {
        error: null,
        recentProjects: [],
        popularProjects: []
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
      let response = await this.$api.get('/projects/recent/20');
      this.popularProjects = response.data;
    },
    async getRecentProjects () {
      let response = await this.$api.get('/projects/popular/20');
      this.recentProjects = response.data;
    }
  },
  mounted() {
    this.getPopularProjects();
    this.getRecentProjects();

  }
}
</script>

