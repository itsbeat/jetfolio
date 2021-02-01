<template>
  <div class="footer bg-gray-600 py-4 sm:py-2">
        <div class="container mx-auto px-4">
            <div class="sm:flex sm:flex-wrap">
            <div class="sm:w-full px-4 md:w-1/6">
                <img
                src="../assets/logo-jet.png"
                class="fill-current absolue md:ml-10 sm:ml-0"
                width="80"
                height="100"
                />
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-6">
                <h6 class="font-bold mb-2">Sede</h6>
                <address class="not-italic mb-4 text-sm">
                311 Verona<br>
                Via lungadige Galtarossa, 6
                </address>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-6">
                <h6 class="font-bold mb-2">Riconoscimenti</h6>
                <p class="mb-4 text-sm">Sviluppato dal team <strong>Bit</strong>.<br>
                <em >Tutti i diritti riservati</em></p>
            </div>
            <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-6">
                <h5 class="text-xl font-bold mb-2 sm:text-center xl:text-left">Seguici sui social</h5>
                <div class="flex sm:justify-center xl:justify-start">
                <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-blue-400 hover:border-blue-400">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-red-600 hover:border-red-600">
                    <i class="fab fa-facebook"></i>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
