<template>
<div class="wrapper">
  <body class="bg-gray-200 font-sans text-gray-700">
    <div class="container mx-auto p-8 flex">
        <div class="max-w-md w-full mx-auto">
            <h1 class="text-4xl text-center mb-12 font-thin">Login</h1>
            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                  <div class="flex justify-center m-5">
            <img src="../assets/logo-jet.png" style="width: 100px">
            </div>
                    <form method="POST" class="" action="#" onsubmit="return false;">
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
                
                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                    <a href="#" class="font-medium text-indigo-500">Nuovo? Crea un account.</a>

                    <a href="#" class="text-gray-600">Password dimenticata?</a>
                </div>
            </div>
        </div>
    </div>
</body>
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
