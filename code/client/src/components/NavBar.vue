<template>
  <div class="font-sans antialiased" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white">
        <a href="/home">
        <img
          src="../assets/logo-jet.png"
          class="fill-current absolue md:ml-10 sm:ml-0"
          width="80"
          height="100"
        />
        </a>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light shadow focus:outline-none"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto sm:text-center"
      >
        <div class="text-sm sm:flex-grow">
          <a
            href="#"
            @click="gotoSection(route, index)"
            v-for="(route, index) in visibleRoutes"
            :key="index"
            class="font-normal text-lg px-1 py-1 mx-3 block mt-4 sm:inline-block sm:mt-0 text-teal-lighter text-center"
            :class="{
              'color_custom border-b-2 font-extrabold ':
                selectRouteIndex == index,
              'text-gray-600': selectRouteIndex != index,
            }"
          >
            {{ route.meta.label }}
          </a>
        </div>
        <div class="flex justify-center m-8">
          <a href="#">
            <span class="relative inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                class="color_custom w-8 h-8 mr-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span
                class="absolute top-0 right-0 mr-6 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                >5</span
              >
            </span>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-8 h-8 color_custom"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </div>

        <div class="flex justify-end mr-16">
          <button
            class="rounded-full overflow-hidden border-2 border-teal-500 w-14 h-14 flex justify-center items-center| hover:border-white focus:outline-none focus:border-white"
            @click="isOpen2 = true"
          >
            <img src="https://i.pravatar.cc/150?u=1" alt="" />
            <span
              class="absolute bottom-1 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full invisible"
            ></span>
          </button>
          <div
            v-if="isOpen2"
            class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
            @click="isOpen2 = false"
          ></div>
          <div
            class="absolute z-30 right-0 mt-16"
            :class="{ hidden: !isOpen2 }"
          >
            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
              <a
                href="#"
                class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600"
                >Profilo</a
              >
              <a
                href="#"
                class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600"
                >Impostazioni</a
              >
              <a
                href="#"
                class="block text-gray-600 font-semibold px-4 py-2 | hover:text-indigo-600"
                >Log out</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style>
.color_custom {
  color: #383088;
}
</style>
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
    // console.log(this.$router.options.routes);
    this.selectRouteIndex = 0;
  },
  methods: {
    gotoSection(route, index) {
      this.selectRouteIndex = index;
      this.$router.push({
        name: route.name,
      });
    },
    toggle() {
      this.open = !this.open;
    },
  },
  computed: {
    visibleRoutes() {
      return this.$router.options.routes.filter((route) => {
        //funzione per filtrare ogni elemento dell'array
        if (route.meta && route.meta.label) {
          return true;
        }
        return false;
      });
    },
  },
};
</script>
