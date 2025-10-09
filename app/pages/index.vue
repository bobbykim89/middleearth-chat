<script setup lang="ts"></script>

<template>
  <div class="text-light-3 container px-xs">
    <!-- hero section -->
    <section
      class="flex flex-col justify-center items-center py-sm lg:py-md lg:max-w-3/4 xl:max-w-3/5 mx-auto"
    >
      <div
        class="px-xs py-3xs bg-dark-4 rounded-full text-warning flex gap-2 items-center mb-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="currentColor"
          class="w-xs aspect-square"
        >
          <!-- !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
          <path
            d="M295.4 37L310.2 73.8L347 88.6C350 89.8 352 92.8 352 96C352 99.2 350 102.2 347 103.4L310.2 118.2L295.4 155C294.2 158 291.2 160 288 160C284.8 160 281.8 158 280.6 155L265.8 118.2L229 103.4C226 102.2 224 99.2 224 96C224 92.8 226 89.8 229 88.6L265.8 73.8L280.6 37C281.8 34 284.8 32 288 32C291.2 32 294.2 34 295.4 37zM142.7 105.7L164.2 155.8L214.3 177.3C220.2 179.8 224 185.6 224 192C224 198.4 220.2 204.2 214.3 206.7L164.2 228.2L142.7 278.3C140.2 284.2 134.4 288 128 288C121.6 288 115.8 284.2 113.3 278.3L91.8 228.2L41.7 206.7C35.8 204.2 32 198.4 32 192C32 185.6 35.8 179.8 41.7 177.3L91.8 155.8L113.3 105.7C115.8 99.8 121.6 96 128 96C134.4 96 140.2 99.8 142.7 105.7zM496 368C502.4 368 508.2 371.8 510.7 377.7L532.2 427.8L582.3 449.3C588.2 451.8 592 457.6 592 464C592 470.4 588.2 476.2 582.3 478.7L532.2 500.2L510.7 550.3C508.2 556.2 502.4 560 496 560C489.6 560 483.8 556.2 481.3 550.3L459.8 500.2L409.7 478.7C403.8 476.2 400 470.4 400 464C400 457.6 403.8 451.8 409.7 449.3L459.8 427.8L481.3 377.7C483.8 371.8 489.6 368 496 368zM492 64C503 64 513.6 68.4 521.5 76.2L563.8 118.5C571.6 126.4 576 137 576 148C576 159 571.6 169.6 563.8 177.5L475.6 265.7L374.3 164.4L462.5 76.2C470.4 68.4 481 64 492 64zM76.2 462.5L340.4 198.3L441.7 299.6L177.5 563.8C169.6 571.6 159 576 148 576C137 576 126.4 571.6 118.5 563.8L76.2 521.5C68.4 513.6 64 503 64 492C64 481 68.4 470.4 76.2 462.5z"
          />
        </svg>
        <span>Powered by AI</span>
      </div>
      <div>
        <h1 class="h1-lg text-center mb-md">
          Chat with Your Favorite
          <span class="text-warning">Lord of the Rings</span> Characters
        </h1>
        <p class="text-lg text-center mb-md">
          Engage in epic conversations with iconic characters from Middle-earth.
          Ask Gandalf for wisdom, seek adventure with Aragorn, or discuss the
          Ring with Frodo. The journey begins here.
        </p>
        <div class="flex justify-center gap-3">
          <NuxtLink class="btn btn-warning p-xs" to="/chat"
            >Start Chatting</NuxtLink
          >
          <NuxtLink class="btn btn-dark-4 p-xs" to="/about"
            >Learn More</NuxtLink
          >
        </div>
      </div>
    </section>
    <!-- cards -->
    <section
      class="grid lg:grid-cols-3 gap-6 py-sm lg:py-md lg:max-w-4/5 xl:max-w-3/4 mx-auto"
    >
      <div
        class="rounded-lg p-sm border-light-4 border hover:border-warning transition-colors duration-300 ease-linear"
      >
        <button
          class="p-2xs rounded-md bg-warning/25 mb-xs text-warning cursor-normal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            class="w-md aspect-square"
          >
            <!-- !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
            <path
              d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"
            />
          </svg>
        </button>
        <h3 class="h3-md mb-xs">20+ Characters</h3>
        <p class="text-dark-1">
          Chat with Gandalf, Frodo, Aragorn, Legolas, Gimli, Galadriel, and many
          more beloved characters from the trilogy.
        </p>
      </div>
      <div
        class="rounded-lg p-sm border-light-4 border hover:border-warning transition-colors duration-300 ease-linear"
      >
        <button
          class="p-2xs rounded-md bg-warning/25 mb-xs text-warning cursor-normal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            class="w-md aspect-square"
          >
            <!-- !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
            <path
              d="M576 304C576 436.5 461.4 544 320 544C282.9 544 247.7 536.6 215.9 523.3L97.5 574.1C88.1 578.1 77.3 575.8 70.4 568.3C63.5 560.8 62 549.8 66.8 540.8L115.6 448.6C83.2 408.3 64 358.3 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304z"
            />
          </svg>
        </button>
        <h3 class="h3-md mb-xs">Authentic Conversations</h3>
        <p class="text-dark-1">
          Each character responds with their unique personality, speech
          patterns, and knowledge from the books and films.
        </p>
      </div>
      <div
        class="rounded-lg p-sm border-light-4 border hover:border-warning transition-colors duration-300 ease-linear"
      >
        <button
          class="p-2xs rounded-md bg-warning/25 mb-xs text-warning cursor-normal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            class="w-md aspect-square"
          >
            <!-- !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
            <path
              d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z"
            />
          </svg>
        </button>
        <h3 class="h3-md mb-xs">Instant Responses</h3>
        <p class="text-dark-1">
          Powered by advanced AI technology to deliver fast, contextual
          responses that feel like real conversations.
        </p>
      </div>
    </section>
    <!-- how to use section -->
    <section class="py-sm lg:py-md lg:max-w-4/5 xl:max-w-3/4 mx-auto">
      <div
        class="grid lg:grid-cols-2 gap-6 border border-light-4 p-sm lg:p-md rounded-lg bg-light-4/3"
      >
        <div class="self-center order-2 lg:order-1">
          <h2 class="h2-md mb-sm">Experience Middle-earth Like Never Before</h2>
          <p class="mb-sm">
            Whether you're seeking wisdom from Gandalf the Grey, learning
            archery from Legolas, or hearing tales of valor from Aragorn, our
            AI-powered chatbot brings these legendary characters to life.
          </p>
          <ul class="mcl-list mcl-list-warning mcl-list-lg">
            <li>Ask for advice on life's challenges</li>
            <li>Discuss lore and Middle-earth history</li>
            <li>Explore character perspectives and motivations</li>
          </ul>
        </div>
        <div class="order-1 lg:order-2">
          <img src="/img/logo-white.webp" alt="logo image large" />
        </div>
      </div>
    </section>
    <!-- section ready -->
    <section
      class="pt-md pb-lg lg:pt-lg lg:pb-xl lg:max-w-4/5 xl:max-w-3/4 mx-auto flex flex-col items-center"
    >
      <h2 class="h2-md mb-sm">Ready to Begin Your Journey?</h2>
      <p class="text-lg mb-sm">
        Join thousands of fans who are already chatting with their favorite
        characters from Middle-earth.
      </p>
      <NuxtLink class="btn btn-warning py-xs" to="/chat"
        >Start Your Adventure</NuxtLink
      >
    </section>
  </div>
</template>

<style scoped></style>
