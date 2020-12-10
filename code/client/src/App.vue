<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/profilo">Profilo</router-link>|
      <router-link to="/dettaglioportfolio">Dettaglio</router-link>|
      <router-link to="/newportfolio">Nuovo Portfolio</router-link>|
    </div>
    <router-view />
  </div>
</template>
