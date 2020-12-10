<template>
<div class="wrapper flex h-screen">
  <div class="w-2/4 bg-gray-200 font-sans text-gray-700">
    <div class="container mx-auto p-8 flex">
        <div class="max-w-md w-full mx-auto">
            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                  <div class="m-5">
                 </div>
                    <form method="POST" class="" action="#" onsubmit="return false;">
                        <h1 class="font-bold text-3xl mb-3">Log in</h1>
                        <p class="mb-7 text-gray-400">Bentornato<br>Perfavore, accedi al tuo account</p>
                        <div class="mb-5">
                            <label for="email" class="block mb-3 text-md font-medium text-gray-600">Username</label>

                            <input type="text" name="email" placeholder="Es: giovanni_ubaldi" class="block w-full p-2.5 rounded-full bg-gray-200 border border-transparent focus:outline-none">
                        </div>
                
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-md font-medium text-gray-600">Password</label>

                            <input type="text" name="password" placeholder="Password" class="block w-full p-2.5 rounded-full bg-gray-200 border border-transparent focus:outline-none">
                        </div>
                        <div class="flex justify-center">
                        <button class="w-1/2 p-2 mt-4 bg-indigo-600 text-white text-lg rounded-full shadow">Login</button>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
<div class = "w-2/4 body-right" style="background: url('/img/logo-jet.ce57e3e3.png') center no-repeat; background-size: 200px;">
</div>
</div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>
