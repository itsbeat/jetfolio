<template>
<div id="navbar" class="bg-white">
    <nav class="h-28 text-white bg-teal-600 flex items-center shadow flex w-full">
        <div class="max-w-screen-2xl mx-auto flex items-center justify-between">
            <div class="flex items-center text-white mr-96">
                <img src="../assets/logo-jet.png" class="fill-current absolue" width="150" height="240" >
            </div>
            <div  class="flex items-center container mx-auto">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <a href="#"
                            @click="gotoSection(route,index)" 
                            v-for="(route,index) in visibleRoutes"
                            :key="index" 
                            class="font-normal px-1 py-1 mx-3"
                            :class="{
                                'text-indigo-600 border-b-2 font-extrabold': selectRouteIndex == index,
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
                    <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646l.087.065-.087-.065z"/>
                                
                            </svg>
                    </a>
                    <div class="flex justify-center m-8">
                        <a href="#">
                        <span class="relative inline-block">
                            <svg class="w-7 h-7 text-indigo-600 fill-current" viewBox="0 0 20 20">
                                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">5</span>
                        </span>
                    </a>
                    <a href="#">
                        <span class="relative inline-block ml-5">
                            <svg class="w-8 h-8 text-indigo-600 fill-current" viewBox="0 0 20 20"><path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                    </span>
                    </a>
                    </div>   
                    

                    <div class="relative">
                        <button class="rounded-full overflow-hidden border-2 border-teal-500 w-14 h-14 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                                @click="isOpen2 = true" >
                            <img src="https://i.pravatar.cc/150?u=1" alt="">
                            <span class="absolute bottom-1 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                            
                        </button>
                        <div v-if="isOpen2" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="isOpen2 = false"></div>
                        <div class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen2}">
                            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                                <a href="#" class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600">Profilo</a>
                                <a href="#" class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600">Impostazioni</a>
                                <a href="#" class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</div>
</template>
<style >
.color_custom{
  color: #383088;
}

</style>
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
