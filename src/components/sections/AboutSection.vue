<template>
  <div class="pt-4 about" id="about">
    <h1 class="pb-10 text-6xl text-center text-green-400 font-title sm:pb-0">
      Bio
    </h1>
    <div>
      <div
        class="h-full px-4 -mt-12 sm:flex md:mb-8 lg:-mb-20 sm:justify-between"
      >
        <div class="mt-2 sm:mt-12 sm:w-1/2">
          <div class="flex">
            <g-image
              src="../../assets/images/profile_pic.jpg"
              width="200"
              height="200"
              class="mx-auto rounded-full opacity-100 "
            />
          </div>
        </div>
        <div
          class="p-8 pb-4 mt-0 text-justify text-green-400 sm:w-1/2 sm:mt-2 sm:p-8 sm:-ml-8 lg:mt-12"
        >
          <p>
            I'm an avid career changer.  I come from a private musical/guitar teaching career.
          </p>
          <br />
          <p>
            It has provided me with countless experiences over the years, which
            have helped me interact, listen, and assist guiding my students and
            clients achieve their goals.
          </p>
          <hr class="my-4 border-green-400" />
        </div>
      </div>
      <div
        class="p-8 px-12 pb-4 -mt-12 text-justify text-green-400 sm:w-full lg:mt-10 lg:text-center"
      >
        <p>
          Since learning to code a few years back, my enjoyment it for has grown
          exponentially. Thus my life started to gravitate more and more towards
          that path of career.
        </p>
        <br />
        <p>
          My focus now is primarily on VueJS and a bit of React. Add some sprinkling of
          Laravel, Ruby, or Node for a backend. I love styling with TailwindCSS,
          but have experience as well with Bootstrap, Vuetify, and Material
          Design.
        </p>
        <hr class="my-4" />
        <p>
          I eagerly look forward to expanding my knowledge through the people I
          meet, seminars, books, videos, challenges and work that I hope to
          encounter along my coding journey.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23308b47' fill-opacity='0.26'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
