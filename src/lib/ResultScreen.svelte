<script>
  import RadialChart from "./RadialChart.svelte";
  import { store } from "../assets/store.js";
  import { fade } from "svelte/transition";
  import { transition_out } from "svelte/internal";

  $: strings = $store.strings;
  let resultBooks = [];
  let booksData = {};

  store.subscribe((value) => {
    calculateBooks();
  });

  function calculateBooks() {
    // Get the highest scoring nature
    let max = 0;
    let maxNature = "";
    let maxNatures = [];

    if (store.weightedPoints == null) return;

    // First step, order the natures by their score
    let orderedNatures = Object.keys(store.weightedPoints).sort(
      (a, b) => store.weightedPoints[b] - store.weightedPoints[a]
    );

    // Second step, add the natures with the highest score to the array
    for (let nature of orderedNatures) {
      if (store.weightedPoints[nature] >= max) {
        max = store.weightedPoints[nature];
        maxNature = nature;
        maxNatures.push(maxNature);
      }
    }

    resultBooks = [];

    if (maxNature.length === 0) return;

    // Convert nature to book data
    let set = new Set();
    for (let i = 0; i < maxNatures.length; i++) {
      let nature = maxNatures[i];
      let books = $store.natureToBooks[nature];

      if (books) {
        for (let bookTitle of books) {
          if (!set.has(bookTitle)) {
            set.add(bookTitle);
            // Find the book in booksData
            let bookInfo = $store.booksData.books.find(
              (b) => b.title === bookTitle
            );
            if (bookInfo) {
              resultBooks.push(bookInfo);
            }
          }
        }
      }
    }
  }

  function restart() {
    location.reload();
  }

  let doTransition = false;
</script>

{#if !doTransition}
  <section transition:fade class="z-50" on:outroend="{() => restart()}">
    <!-- Using Tailwind CSS, build a grid that divides screen in half. The right grid is vertically divied in other two sections -->
    <div class="grid lg:grid-cols-2 h-screen w-screen">
      <!-- Left grid -->
      <div
        class="bg-black/50 flex flex-col flex-wrap justify-end lg:justify-center items-center pt-2 overflow-y-auto">
        <h1 class="text-white text-box select-none p-0 mb-4 w-[80%] lg:w-[90%]">
          {strings["ResultMessage"]}
        </h1>
        <!-- Books Display -->
        <div class="flex flex-col justify-center items-center w-[90%] gap-6 pointer-events-none select-none pb-4">
          {#each resultBooks as book}
            <div class="text-center">
              <h2 class="text-white text-lg lg:text-xl font-bold mb-2">
                {book.title}
              </h2>
              <p class="text-white/75 text-sm lg:text-base mb-1">
                by {book.author}
              </p>
              <p class="text-white/60 text-xs lg:text-sm max-w-xs">
                {book.description}
              </p>
            </div>
          {/each}
        </div>
        <button
          on:click="{() => {
            doTransition = true;
          }}"
          class="text-white select-none text-box p-0 my-4 leading-none lg:h-fit w-[40%] lg:w-[30%] hidden lg:block"
          >{strings["Restart"]}</button>
      </div>
      <!-- Right grid -->
      <div
        class="bg-black/50 flex flex-col flex-wrap justify-start lg:justify-center items-center pb-2">
        <RadialChart class="w-[75%] m-0 p-0" />

        <button
        on:click="{() => {
          doTransition = true;
        }}"
        class="text-white select-none text-box p-0 my-4 w-[75%] lg:w-[30%] block lg:hidden"
        >{strings["Restart"]}</button>
      </div>
    </div>
  </section>
{:else}
  <section transition:fade>
    <div class="fixed right-0 top-0 w-screen h-screen bg-black"></div>
  </section>
{/if}
