<template>
  <div class="likeproject">
    <pre>
      <p>Id utente loggato: {{logged_id_user}}</p>
      <p>Id progetto: {{project_id}}</p>
      <p>Id utente del progetto: {{project_id_user}}</p>
    </pre>
  </div>
</template>

<script>

export default {
  name: 'LikeProject',
  components: {
  },
  data() {
    return {
      project_id_user: null,
      project_id: null,
      info: null,
      logged_id_user: null,
    }
  },
  methods: {
    async getProjectById() {
      let response = await this.$api.get("/projects/1");

      console.log(response.data);

      this.project_id_user = response.data.user_id;
      console.log(this.project_id_user);

      this.project_id = response.data.id;
      console.log(this.project_id);
    },
    async getLoggedUserId() {
      try {
        const ls = JSON.parse(localStorage.getItem("user"));
        this.info = await this.$api.get(`/users/profile/${ls.id}`);

        this.logged_id_user = this.info.data.id;
      } catch (error) {
        this.error = "Errore generico.";
      }
    },
  },
  mounted() {
    this.getLoggedUserId();
    this.getProjectById();
    
  },
}
</script>
