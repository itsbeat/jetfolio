<template>
  <div class="landing">
    <!-- HOME SEARCH -->
    <!-- <div class="hero-search h-80 bg-gray-200 flex justify-center items-center">
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
    </div> -->
    <!-- CAROUSEL -->
    <div class="landing-carousel w-full">
      <img src="https://via.placeholder.com/1920x1080">
      <img src="https://via.placeholder.com/1920x1080">
      <img src="https://via.placeholder.com/1920x1080">
    </div>

    <!-- HERO HOME -->
    <div class="hero-home bg-gray-100 pb-10 pt-8 text-center">
      <h1 class="mb-5 text-2xl font-bold uppercase tracking-wide text-gray-700">Fai vedere cosa sai fare</h1>
      <h4 class="mb-16 text-base text-gray-400">Aiutiamoci a migliorare insieme</h4>
      <div class="flex justify-evenly items-end">
        <div class="hero-home__item flex flex-col justify-center">
            <img class="mb-8" src="../assets/up_arrow.svg">
            <h4 class="mb-2 font-bold text-gray-700">Velocità</h4>
            <p class="text-gray-500">Con JetFolio pubblica e scopri nuovi progetti con una velocità mai vista prima.</p>
        </div>
        <div class="hero-home__item flex flex-col justify-center">
            <img class="mb-8" src="../assets/award.svg">
            <h4 class="mb-2 font-bold text-gray-700">Facilità</h4>
            <p class="text-gray-500">Condividere le tue idee non è mai stato così sempice, provare per credere.</p>
        </div>
        <div class="hero-home__item flex flex-col justify-center">
            <img class="mb-8" src="../assets/eye.svg">
            <h4 class="mb-2 font-bold text-gray-700">Visibilità</h4>
            <p class="text-gray-500">I tuoi lavori visibili da tutti gli utenti. JetFolio, la tua porta nel mondo digitale.</p>
        </div>
      </div>
    </div>
    <!-- PORTFOLIOS -->

    <!-- NUOVO PORTFOLIO -->
  <div class="portfolio-guide flex p-20">
    <div class="portfolio-guide__video w-1/2 text-center">
      <img class="inline" src="https://via.placeholder.com/600x350">
    </div>
    <div class="portfolio-guide__text w-1/2 px-8">
      <h1 class="mb-5 text-2xl font-bold uppercase tracking-wide text-indigo-800">crea un nuovo progetto tutto tuo</h1>
      <p class="text-gray-400 mb-16">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestiem consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan dignissim qui blandit praesent delenit.</p>
      <button class="uppercase text-white bg-indigo-800 rounded-3xl p-3 px-12 text-xs">nuovo portfolio</button>
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
        projects: []
      }
  },
  methods: {
    async logout() {
        return await this.$api.post("/logout");
      },
    async getProjects() {
      return await this.$api.get('/projects');
    }
  },
  mounted() {
    console.log(this.getProjects());
  }
}  
</script>

