
<template>
  <div class="wrapper flex h-screen" v-on:submit.prevent>
    <div class="w-2/4 bg-white font-sans text-gray-700">
      <div class="container mx-auto p-8 flex">
        <div class="max-w-md w-full mx-auto">
          <div class="bg-white rounded-lg overflow-hidden">
            <div class="p-8">
              <div class="m-5"></div>
              <div class="flex mb-8">
                <button
                  class="w-1/3 p-3 mt-4 mr-3 bg-white text-indigo-600 border border-indigo-600 text-lg rounded-full shadow focus:outline-none"
                  @click="changeView('registrazione')"
                >
                  REGISTRATI
                </button>
                <button
                  class="w-1/3 p-3 mt-4 bg-indigo-600 text-white text-lg rounded-full shadow shadow focus:outline-none"
                  @click="changeView('login')"
                >
                  LOGIN
                </button>
              </div>
              <form 
                method="POST"
                class=""
                action="#"
                onsubmit="return false;"
                id="login"
                v-if="currentView === 'login'"
                @submit.prevent="login()"
              >
                <h1 class="font-bold text-3xl mb-3">Log In</h1>
                <p class="mb-7 text-gray-400">
                  Bentornato.<br />Per favore, accedi al tuo account.
                </p>
                <div class="mb-5">
                  <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-indigo-600 absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="EMAIL"
                    class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10"
                    v-model="email"
                    @focus="resetError()"
                  />
                </div>

                <div class="mb-5">
                  <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-indigo-600 absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
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
                    class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10"
                    v-model="password"
                    @focus="resetError()"
                  />
                </div>

                <div class="flex justify-between p-2 text-sm bg-white">
                  <div class="flex justify-start p-2 ml-2">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-gray-600 z-50"
                      checked
                    /><span class="ml-2 text-gray-700">Ricordami</span>
                  </div>
                  <div class="flex justify-end p-2">
                    <a href="#" class="font-medium text-indigo-500"
                      >Password dimenticata?</a
                    >
                  </div>
                </div>
                 <div class="text-center max-w-lg mx-auto text-red-600 text-sm">
                  {{ error }}
                </div>
                <div class="flex justify-center">
                  <button
                    @click="login()"
                    class="w-1/3 p-2 mt-4 bg-indigo-600 text-white text-lg rounded-full shadow"
                  >
                    ACCEDI
                  </button>
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
                <p class="mb-7 text-gray-400 text-center">
                  oppure continua con
                </p>
                <div class="mb-5">
                  <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-indigo-600 absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                    class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>
                <div class="mb-5">
                  <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-indigo-600 absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="EMAIL"
                    class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>

                <div class="mb-5">
                  <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-indigo-600 absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
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
                    type="text"
                    name="password"
                    placeholder="PASSWORD"
                    class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>
                <div class="mb-5">
                  <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-indigo-600 absolute bg-transparent rounded text-base items-center justify-center w-9 pl-3 py-3"
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
                    type="text"
                    name="password"
                    placeholder="CONFERMA PASSWORD"
                    class="px-3 py-3 block w-full p-2.5 rounded-full bg-white border border-indigo-600 relative focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>

                <div class="flex p-2 text-sm bg-white">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600 z-50"
                    checked
                  /><span class="ml-3 text-gray-700"
                    >Accetto i
                    <span class="font-medium text-indigo-500 underline"
                      >Termini di condizioni d'uso</span
                    ></span
                  >
                </div>
                <div class="flex justify-center">
                  <button
                    class="w-1/3 p-2 mt-4 bg-indigo-600 text-white text-lg rounded-full shadow"
                  >
                    REGISTRATI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-2/4 body-right bg-cover bg-center"
      style="
        background: url('https://www.apple.com/v/apple-events/home/n/images/november-2020/meta/og__fodnljjkwl6y.png?202011090330')
          no-repeat;
      "
    ></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      error: null,
      currentView: "login",
    };
  },
  mounted() {},
  methods: {
    async login() {
      try {
        await this.$api.post("/login", {
          email: this.email,
          password: this.password
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
