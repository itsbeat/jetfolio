<template>
  <div class="home">
    SEI NELLA HOME DI JETFOLIO!<br>
    YUPPIIIII!!!
    <div>
      <button @click="logout()">LOGOUT</button>
    </div>
    <div>
      {{projects}}
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
      localStorage.removeItem('user');
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

