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
    <agile class="main mb-20" ref="main" :options="options1" :as-nav-for="asNavFor1">
        <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">

          <img :src="slide"/>

        </div>
        <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
        <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
      </agile>

    <!-- HERO HOME -->
    <section class="bg-gray-100 text-gray-600">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-10">
          <h1 class="text-4xl font-medium uppercase title-font text-gray-900 mb-4">Fai vedere cosa sai fare</h1>
          <p class="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Aiutiamoci a migliorare insieme</p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
              <img src="../assets/up_arrow.svg">
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Velocità</h2>
              <p class="leading-relaxed text-base">Con JetFolio pubblica e scopri nuovi progetti con una velocità mai vista prima.</p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
              <img src="../assets/award.svg">
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Facilità</h2>
              <p class="leading-relaxed text-base">Condividere le tue idee non è mai stato così sempice, provare per credere.</p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
              <img src="../assets/eye.svg">
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Visibilità</h2>
              <p class="leading-relaxed text-base">I tuoi lavori visibili da tutti gli utenti. JetFolio, la tua porta nel mondo digitale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIOS -->

    <!-- NUOVO PORTFOLIO -->
  <div class="container px-5 py-20 mx-auto flex items-center">
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
import { VueAgile } from 'vue-agile'

export default {

  name: 'Home',
  components: {
    agile: VueAgile,
  },
  data(){
      return {
        error: null,
        projects: [],
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
    async getProjects() {
      return await this.$api.get('/projects');
    }
  },
  mounted() {
    console.log(this.getProjects());
  }
}  
</script>
<style>
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

