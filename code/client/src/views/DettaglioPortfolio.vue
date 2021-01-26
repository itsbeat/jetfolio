<template>
  <div class="DettaglioPortfolio">
    <div class="m-10">
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-2/3 mb-10 pr-4">
              <div class="rounded-lg object-cover object-center overflow-hidden">
                <agile>
                    <div class="slide">
                      <img alt="content" class="object-cover object-center" src="https://dummyimage.com/1201x501">
                        <h3>titolo</h3>
                    </div>
                    
                    <div class="slide">
                      <img alt="content" class="object-cover object-center" src="../assets/foto.jpg">
                        <h3>slide n</h3>
                    </div>
                </agile>
                <h2>Descrizione del progetto</h2>
              </div>
              
            </div>
            <div class="sm:w-1/3 mb-10 px-4">
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{{profile.username}}</h2>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Visualizza</button>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Like</button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Progetti simili</h1>
        <div class="flex flex-wrap -m-4">
          <div v-for="project in projects" :key="project.id" class="xl:w-1/3 md:w-1/2 p-4">
            <div class="rounded-lg">
              <img class="h-50 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/600x360" alt="content">
              <h3>{{project.title}}</h3>
              <p>{{project.id}} </p>
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
        }
      }
      
  },
  async mounted() {
    let response = await this.$api.get(`/users/1`);
    this.profile = response.data

    let projectsprofile = await this.$api.get(`/projects`);
    this.projects = projectsprofile.data
    console.log(this.projects)
  }
  
}
</script>
