<template>
  <div class="home">

<main class="bg-gray-100 bg-opacity-25">

  <div class="lg:w-8/12 lg:mx-auto mb-2">

    <header class="flex flex-wrap items-center p-4 md:py-8">

      <div class="md:w-3/12 md:ml-1">
        <!-- profile image -->
        <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-indigo-600 p-1" src="../assets/stockprofile.jpg" alt="profile">
      </div>

      <!-- profile meta -->
      <div class="md:w-4/12 sm:6/12 md:ml-2 classe">
        <div class="md:flex md:flex-wrap md:items-center mb-2 md_ml-4 ">
          <h3 class="md:text-2xl sm:text-xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
            Nome utente
          </h3>
        </div>
        <div class="md:flex md:flex-wrap md:items-center mb-2">
          <h3 class="md:text-2xl sm:text-xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
            E-mail
          </h3>
        </div>
        <div class="md:flex md:flex-wrap md:items-center mb-2">
          <h3 class="md:text-2xl sm:text-xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
            Numero di telefono
          </h3>
        </div>
      </div>
      <div class="md:w-4/12 sm:w-12/12 text-sm my-2">
      <div class="md:w-96 md:p-6 sm:w-34 text-center border-4 rounded-3xl border-indigo-600 border-opacity-0 bg-indigo-100">
        <h1 class="font-bold text-md  text-indigo-600">BIOGRAFIA</h1>
        <p class="text-left sm-text-sm">
          Sono un professionista dell’esperienza utente,
          con sede a Verona, In Italia.
          Sono un programmatore informatico e 
          Ho scritto un libro di successo sull’usabilità del Web.
          Dirigo anche un società di consulenza di informatica.
        </p>
      </div>
      </div>

    </header>
    <div class="flex justify-start ...">
  <button class="p-2 mb-4 focus:outline-none border-2 border-indigo-300 border-opacity-100 rounded-3xl uppercase text-indigo-600">modifica</button>
</div>

    <!-- posts -->
    <div class="px-px md:px-3 ">
      <!-- user following for mobile only -->
      <ul class="flex justify-around space-x-8 border-t text-center p-1 text-gray-600 leading-snug text-sm md:bg-indigo-100 md:rounded-full md:mb-2">
        <li>
          <span class="font-semibold text-gray-800 block">136</span>
          Followers
        </li>

        <li>
          <span class="font-semibold text-gray-800 block">40.5k</span>
          Follow
        </li>
        <li>
          <span class="font-semibold text-gray-800 block">302</span>
          Portfolio
        </li>
      </ul>

      <!-- insta freatures 
      <ul class="flex md:hidden items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t">

        <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
          <a class="inline-block p-3" href="#">
            <i class="fas fa-th-large text-xl md:text-xs"></i>
            <span class="hidden md:inline">post</span>
          </a>
        </li>
        <li>
          <a class="inline-block p-3" href="#">
            <i class="far fa-square text-xl md:text-xs"></i>
            <span class="hidden md:inline">igtv</span>
          </a>
        </li>
        <li>
          <a class="inline-block p-3" href="#">
            <i class="fas fa-user border border-gray-500
                             px-1 pt-1 rounded text-xl md:text-xs"></i>
            <span class="hidden md:inline">tagged</span>
          </a>
        </li>
      </ul>
      -->
      <!-- flexbox grid -->
      <div class="flex flex-wrap -mx-px md:-mx-3">

        <!-- column -->
        <div class="w-1/3 p-px md:px-3 ">
          <!-- post 1-->
          <a href="#">
            <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
              <!-- post image-->
              <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image">

              <i class="fas fa-square absolute right-0 top-0 m-1"></i>
              <!-- overlay-->
              <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                <div class="flex justify-center items-center 
                                    space-x-4 h-full">
                  <span class="p-2">
                    <i class="fas fa-heart"></i>
                    412K
                  </span>

                  <span class="p-2">
                    <i class="fas fa-comment"></i>
                    2,909
                  </span>
                </div>
              </div>

            </article>
          </a>
        </div>

        <div class="w-1/3 p-px md:px-3">
          <a href="#">
            <!-- post 2 -->
            <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
              <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image">

              <!-- overlay-->
              <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                <div class="flex justify-center items-center 
                                    space-x-4 h-full">
                  <span class="p-2">
                    <i class="fas fa-heart"></i>
                    412K
                  </span>

                  <span class="p-2">
                    <i class="fas fa-comment"></i>
                    1,993
                  </span>
                </div>
              </div>

            </article>
          </a>
        </div>

        <div class="w-1/3 p-px md:px-3">
          <a href="#">
            <article class="post bg-gray-100 text-white relative pb-full  md:mb-6">
              <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image">
              <!-- overlay-->
              <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                <div class="flex justify-center items-center 
                                    space-x-4 h-full">
                  <span class="p-2">
                    <i class="fas fa-heart"></i>
                    112K
                  </span>

                  <span class="p-2">
                    <i class="fas fa-comment"></i>
                    2,090
                  </span>
                </div>
              </div>
            </article>
          </a>
        </div>

        <div class="w-1/3 p-px md:px-3">
          <a href="#">
            <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
              <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image">

              <i class="fas fa-video absolute right-0 top-0 m-1"></i>

              <!-- overlay-->
              <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                <div class="flex justify-center items-center 
                                    space-x-4 h-full">
                  <span class="p-2">
                    <i class="fas fa-heart"></i>
                    841K
                  </span>

                  <span class="p-2">
                    <i class="fas fa-comment"></i>
                    909
                  </span>
                </div>
              </div>

            </article>
          </a>
        </div>

        <div class="w-1/3 p-px md:px-3">
          <a href="#">
            <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
              <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="image">
              <!-- overlay-->
              <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                <div class="flex justify-center items-center 
                                    space-x-4 h-full">
                  <span class="p-2">
                    <i class="fas fa-heart"></i>
                    120K
                  </span>

                  <span class="p-2">
                    <i class="fas fa-comment"></i>
                    3,909
                  </span>
                </div>
              </div>

            </article>
          </a>
        </div>

      </div>
    </div>
  </div>
</main>

  </div>
</template>
<style>
.pb-full {
  padding-bottom: 100%;
}

/* hide search icon on search focus */
.search-bar:focus + .fa-search{
  display: none;
}

@media screen and (min-width: 768px) {
  .post:hover .overlay {
    display: block;
  }
}
@media screen and (max-width: 500px) {
  .classe{
    margin-left: 15%;
  }
  }

</style>


<script>

export default {
  name: 'Profilo',
  components: {

  }
}
</script>
