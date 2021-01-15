<template>
  <div class="home">
    SEI NELLA HOME DI JETFOLIO!<br>
    YUPPIIIII!!!
    <div>
      <button @click="logout()">LOGOUT</button>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      error: null,
    };
  },
  mounted() {},
  methods: {
    async logout() {
      await this.$api.post("/logout", {});
    }
  },
  computed: {},
};

</script>

