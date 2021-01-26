
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

                <div class="mb-5">
                  <span
                    class="color_custom z-10 h-full leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    required
                    class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10"
                    v-model="password"
                    @focus="resetError()"
                  />
                </div>

                                  <div class="flex justify-start  p-2 ml-2">
                                      <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 z-50" checked><span class="ml-2 text-gray-700 underlinecd ">Ricordami</span>
                                  </div>
                                  <div class="flex justify-end  p-2 ">
                                    <a href="#" class="color_custom font-medium ">Password dimenticata?</a>
                                  </div>
                                </div>

                                <div class="flex justify-center">
                                  <button class="active w-1/3 p-2 mt-4 mb-5 text-white text-lg rounded-full shadow focus:outline-none">ACCEDI</button>
                                </div>
                                <p class="color_custom divider mb-7">Oppure continua con</p>
                                <div class="flex justify-center">
                                      <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="color_custom bi bi-google m-3" viewBox="0 0 16 16">
                                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                        </svg>
                                      </a>
                                      <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="color_custom bi bi-linkedin m-3" viewBox="0 0 16 16">
                                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                        </svg>
                                      </a>
                                      <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="color_custom bi bi-twitter m-3" viewBox="0 0 16 16">
                                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                      </a>
                                      <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="color_custom bi bi-facebook m-3" viewBox="0 0 16 16">
                                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                        </svg>
                                      </a>
                                      
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

                <div class="flex justify-center">
                  <button
                    @click="login()"
                    class="active w-1/3 p-2 mt-4 mb-5 text-white text-lg rounded-full shadow focus:outline-none"
                  >
                    ACCEDI
                  </button>
                </div>
                <p class="color_custom divider mb-7">Oppure continua con</p>
                <div class="flex justify-center">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-google m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-linkedin m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-twitter m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-facebook m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      />
                    </svg>
                  </a>
                </div>
              </form>
              <!--Fase di registrazione-->
              <form
                method="POST"
                class=""
                action="#"
                onsubmit="return false;"
                id="registrazione"
                v-if="currentView === 'registrazione'"
              >
                <h1 class="font-bold text-3xl mb-3">Registrati con</h1>
                <div class="flex justify-center">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-google m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-linkedin m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-twitter m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="color_custom bi bi-facebook m-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      />
                    </svg>
                  </a>
                </div>

                                <div class="flex p-2 text-sm bg-white">
                                    <input type="checkbox" required class="form-checkbox h-5 w-5 text-gray-600 z-50" ><span class="ml-3 text-gray-700">Accetto i <a href="#"><span class="color_custom font-medium underline">Termini di condizioni d'uso</span></a></span>
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
        <!--
    <div class="w-2/4 body-right bg-cover bg-center">
      <div class="flex justify-center mt-40">
        <img src="../assets/image.png" alt="" />
      </div>
    </div>
    -->
</template>
<style >
.active {
  background-color: #383088;
  color: white;
}
.color_custom {
  color: #383088;
}
</style>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      error: null,
      currentView: "login",
      isActive: false,
    };
  },
  mounted() {},
  methods: {
    async login() {
      try {
        await this.$api.post("/login", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
      } catch (error) {
        this.error = "Email o password errate. Riprova.";
      }
    },
    resetError() {
      this.error = null;
    },
    changeView(destinazione) {
      this.currentView = destinazione;
    },
  },
  computed: {},
};
</script>
