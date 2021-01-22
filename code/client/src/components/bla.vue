<template>
    <div class="font-sans antialiased" id="app">
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white">
      <img src="../assets/logo-jet.png" class="fill-current absolue" width="50" height="100" >
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light shadow focus:outline-none " >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto sm:text-center">
      <div class="text-sm sm:flex-grow">
        <a href="#"
                            @click="gotoSection(route,index)" 
                            v-for="(route,index) in visibleRoutes"
                            :key="index" 
                            class="font-normal px-1 py-1 mx-3 block mt-4 sm:inline-block sm:mt-0 text-teal-lighter text-center"
                            :class="{
                                'text-indigo-600 border-b-2 font-extrabold ': selectRouteIndex == index,
                                'text-gray-600': selectRouteIndex != index,
                            }"
                        >
                            {{route.meta.label}}
                        </a>
      </div>
      <div class="flex justify-end">
                        <button class="rounded-full overflow-hidden border-2 border-teal-500 w-14 h-14 flex justify-center items-center| hover:border-white focus:outline-none focus:border-white"
                                @click="isOpen2 = true" >
                            <img src="https://i.pravatar.cc/150?u=1" alt="">
                            <span class="absolute bottom-1 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full invisible "></span>
                            
                        </button>
                        <div v-if="isOpen2" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="isOpen2 = false"></div>
                        <div class="absolute z-30 right-0 mt-16" :class="{'hidden': !isOpen2}">
                            <div class="bg-white rounded-lg shadow-lg py-2 w-48 ">
                                <a href="#" class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600">Profilo</a>
                                <a href="#" class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600">Impostazioni</a>
                                <a href="#" class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600">Log out</a>
                            </div>
                        </div>
                    </div>
    </div>
  </nav>
</div>
</template>
<script>
export default {
  name: "bla",
  data() {
    return {
        isOpen1: true,
        isOpen2: false,
        routes: [],
        selectRouteIndex: -1,
        open: false,

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
    toggle() {
      this.open = !this.open;
    }
    
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