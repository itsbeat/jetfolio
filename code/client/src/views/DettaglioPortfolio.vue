<template>
  <div class="DettaglioPortfolio">
    <div class="container px-5 pb-12 mx-auto">
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 ">
            <div class="sm:w-2/3 mb-10 pr-4">
              <div class="rounded-3xl object-cover object-center overflow-hidden">
                <agile :navButtons="false" ref="carousel">
                    <div class="slide">
                      <img alt="content" class="object-cover object-center" src="https://dummyimage.com/1201x501">
                    </div>
                    <div class="slide">
                      <img alt="content" class="object-cover object-center" src="../assets/foto.jpg">
                    </div>
                    <div class="slide">
                      <img alt="content" class="object-cover object-center" src="../assets/foto.jpg">
                    </div>
                    <div class="slide">
                      <img alt="content" class="object-cover object-center" src="../assets/foto.jpg">
                    </div>
                </agile>
                
                
              </div>
              <button class="button back" @click="$refs.carousel.goToPrev()">Back</button>
              <button class="button next" @click="$refs.carousel.goToNext()">Next</button>

              <h1 class="text-4xl font-bold text-black	">Local Taste</h1>
              <p class="pt-2">Un e-commerce per prodotti artigianali di qualità, per incentivare il km 0. Scopri un nuovo di modo per conoscere le nostre tradizioni.</p>
            </div>
            <div class="sm:w-1/3 mb-10 px-4">
              <div class="flex justify-center items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" class="w-full h-full object-cover">
                </div>
                <div class="text-left mb-3">
                  <h2 class="title-font align-center text-2xl font-medium text-gray-900 capitalize">{{profile.username}}</h2>
                  <h3 class="">12345656 Followers</h3>
                </div>
              </div>
              <div class="flex flex-col">
                <button class="mx-auto w-1/2 mt-3 rounded-full py-3 px-6 text-blue-500 text-center border-2 border-blue-500">Follow</button>
                <button class="mx-auto w-1/2 mt-3 rounded-full py-3 px-6 text-blue-500 text-center border-2 border-blue-500">Like</button>
              </div>
                
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="body-font">
      <div class="container px-5 pb-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 pb-5 text-gray-900">Progetti simili</h1>
        <div class="flex flex-wrap -m-4">
          <div v-for="p of projects" :key="p.id" class="xl:w-1/3 md:w-1/2 p-4">
            <div class="rounded-lg">
              <img class="h-50 rounded-3xl w-full object-cover object-center mb-6" src="https://dummyimage.com/600x360" alt="content">
              <h3>{{p.title}}</h3>
              <p>{{p.id}} </p>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'DettaglioPortfolio',
  components: {
    agile: VueAgile 
  },
  data(){
      return{
        profile: {
            id: null,
            username: null,
            email: null,
        },
        projects: {
          id: null,
          title: null,
          description: null,
          like_count: null,
          user_id: null
        },
      }
      
  },
  async mounted() {
    let response = await this.$api.get(`/users/profile/1`);
    this.profile = response.data;

    let projectsprofile = await this.$api.get(`/projects`);
    this.projects = projectsprofile.data;
    console.log('ciaoooo',this.projects)
  }
  
}
</script>
<style>

</style>