<template>
<div>
  {{projects}}
</div>
</template>

<script>

export default {

  name: 'Home',
  components: {
    
  },
  data(){
      return {
        projects: []
      }
  },
  methods: {
    async getProjects() {
      return await this.$api.get('/projects');
    }
  },
  mounted() {
    console.log(this.getProjects());
  }
}
</script>
