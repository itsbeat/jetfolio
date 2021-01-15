<template>
<div id="navbar" class="bg-white">
    <nav class="h-28 text-white bg-teal-600 flex items-center shadow flex w-full">
        <div class="max-w-screen-2xl mx-auto flex items-center justify-between">
            <div class="flex items-center text-white mr-72">
                <img src="../assets/logo-jet.png" class="fill-current absolue" width="150" height="240" >
            </div>
            <div  class="flex items-center container mx-auto">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <a href="#"
                            @click="gotoSection(route,index)" 
                            v-for="(route,index) in visibleRoutes"
                            :key="index" 
                            class="font-semibold px-1 py-1 mx-3"
                            :class="{
                                'text-indigo-600 border-b-2': selectRouteIndex == index,
                                'text-gray-600': selectRouteIndex != index,
                            }"
                        >
                            {{route.meta.label}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="lg:flex lg:flex-grow items-center container mx-auto px-32 ml-74">
                    <div class="relative">
                        <button class="rounded-full overflow-hidden border-2 border-teal-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                                @click="isOpen2 = true">
                            <img src="https://i.pravatar.cc/150?u=1" alt="">
                        </button>
                        <div v-if="isOpen2" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="isOpen2 = false"></div>
                        <div class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen2}">
                            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                                <a href="#" class="block text-grey-dark font-semibold px-4 py-2 | hover:text-blue-dark">Profilo</a>
                                <a href="#" class="block text-grey-dark font-semibold px-4 py-2 | hover:text-blue-dark">Impostazioni</a>
                                <a href="#" class="block text-grey-dark font-semibold px-4 py-2 | hover:text-blue-dark">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
        isOpen1: true,
        isOpen2: false,
        routes: [],
        selectRouteIndex: -1,

    };
  },
  mounted() {
      console.log(this.$router.options.routes);
      this.selectRouteIndex= 0;
  },
  methods: {
    gotoSection(route,index){
        this.selectRouteIndex = index;
        this.$router.push({
            name: route.name
        });
    },
    
  },
  computed: {
      visibleRoutes(){
          return this.$router.options.routes.filter((route) => {
              //funzione per filtrare ogni elemento dell'array
              if(route.meta && route.meta.label){
                  return true;
              }
              return false;
          });
      }
  },
};
</script>
<style></style>
