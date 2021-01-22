
<template>
        <div class="wrapper flex h-screen">
          <div class="lg:w-2/4 sm:w-full bg-white font-sans text-gray-700">
            <div class="container mx-auto p-8 flex">
                <div class="max-w-md w-full mx-auto">
                    <div class="bg-white rounded-lg overflow-hidden "> <!--shadow-2xl-->
                        <div class="p-8">
                          <div class="m-5">
                        </div>
                        <div class="flex mb-8">
                            <button class=" p-3 mt-4 mr-3 bg-white text-indigo-600 border border-indigo-600 text-lg rounded-full   shadow focus:outline-none" @click="changeView('registrazione')" v-bind:class="currentView == 'login'? '' : 'active'">REGISTRATI</button>
                            <button class=" p-3 mt-4  text-indigo-600 border border-indigo-600 text-lg rounded-full shadow  focus:outline-none" @click="changeView('login')" v-bind:class="currentView == 'login'? 'active' : ''" >LOGIN</button>
                        </div>
                            <form method="POST" class="" action="#" onsubmit="return false;" id="login" v-if="currentView === 'login'">
                                <h1 class="font-bold text-3xl mb-3">Log In</h1>
                                <p class="mb-7 text-gray-400">Bentornato.<br>Per favore, accedi al tuo account.</p>
                                <div class="mb-5">
                                    <span class="color_custom z-10 h-full leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                      </svg>
                                </span>
                                  <input type="text" name="username" placeholder="USERNAME" required class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10">
                                </div>
                        
                                <div class="mb-5">
                                    <span class="color_custom z-10 h-full leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                      </svg>
                                    </span>
                                  <input type="password" name="password" placeholder="PASSWORD" required class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10">
                                </div>

                                <div class="flex justify-between p-2 text-sm bg-white">

                                  <div class="flex justify-start  p-2 ml-2">
                                      <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 z-50" checked><span class="ml-2 text-gray-700 underlinecd ">Ricordami</span>
                                  </div>
                                  <div class="flex justify-end  p-2 ">
                                    <a href="#" class="color_custom font-medium ">Password dimenticata?</a>
                                  </div>
                                </div>

                                <div class="flex justify-center">
                                  <button class="active w-1/3 p-2 mt-4  text-white text-lg rounded-full shadow focus:outline-none">ACCEDI</button>
                                </div>
                            </form>
                      
                        <!--Fase di registrazione-->
                          <form method="POST" class="" action="#" onsubmit="return false;" id="registrazione" v-if="currentView === 'registrazione'">
                                <h1 class="font-bold text-3xl mb-3">Registrati con </h1>
                                <div class="flex justify-start">
                                  
                                </div>
                                
                                <p class="color_custom mb-7 text-center font-bold"> Oppure continua con </p>
                                 <hr>
                                
                                <div class="mb-5">
                                    <span class="color_custom z-10 h-full leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                      </svg>
                                    </span>
                                  <input type="text" name="username" placeholder="USERNAME" required class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10">
                                </div>
                                <div class="mb-5">
                                    <span class="color_custom z-10 h-full leading-snug font-normal absolute text-center  absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                      </svg>
                                    </span>
                                    <input type="text" name="email" placeholder="EMAIL" required class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10">
                                </div>
                        
                                <div class="mb-5">
                                    <span class="color_custom z-10 h-full leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                      </svg>
                                    </span>
                                <input type="password" name="password" placeholder="PASSWORD" required class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10">
                                </div>

                                <div class="mb-5">
                                    <span class="color_custom z-10 h-full leading-snug font-normal absolute text-center  absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                      </svg>
                                    </span>
                                    <input type="password" name="password_2" placeholder="CONFERMA PASSWORD" required class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10">
                                </div>

                                <div class="flex p-2 text-sm bg-white">
                                    <input type="checkbox" required class="form-checkbox h-5 w-5 text-gray-600 z-50" ><span class="ml-3 text-gray-700">Accetto i <span class="color_custom font-medium underline">Termini di condizioni d'uso</span></span>
                                </div>
                                <div class="flex justify-center">
                                  <button class="active w-1/3 p-2 mt-4 text-white text-lg rounded-full shadow focus:outline-none">REGISTRATI</button>
                                </div>
                              
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class = "hidden lg:inline w-1/2 body-right bg-cover bg-center ">
            <div class="flex justify-center mt-40">
              <img  src="../assets/image.png" alt="">
            </div>
      </div>
  </div>
</template>
<script src="https://kit.fontawesome.com/your-code-number.js"></script>
<style >
.active {
  background-color: #383088;
  color: white;
}
.color_custom{
  color: #383088;
}

</style>
<script>

export default {
  name: "Login",
  data() {
    return {
      currentView: "login",
      isActive: false,
    };
  },
  mounted() {},
  methods: {
    changeView(destinazione) {
      this.currentView = destinazione;
    },
  },
  computed: {}
}
</script>
