<template>
<div>
    
    <nav-bar v-show="!['Login'].includes($route.name)"></nav-bar>
            <router-view></router-view>
    <back-footer v-show="!['Login'].includes($route.name)"></back-footer>

</div>
</template>