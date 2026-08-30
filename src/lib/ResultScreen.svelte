<script>
  import RadialChart from './RadialChart.svelte';
  import { store } from '../assets/store.js';
  import { fade } from 'svelte/transition';

  $: strings = $store.strings || {};
  $: weighted = $store.weightedPoints || {};
  $: orderedNatures = Object.keys(weighted).sort((a, b) => weighted[b] - weighted[a]);
  $: maxScore = orderedNatures.length ? weighted[orderedNatures[0]] : 0;
  $: winningNatures = orderedNatures.filter(n => weighted[n] === maxScore);
  $: resultBooks = getBooks(winningNatures);

  function getBooks(natures) {
    if (!$store.natureToBooks || !$store.booksData?.books) return [];
    const seen = new Set();
    const result = [];
    for (const nature of natures) {
      for (const title of ($store.natureToBooks[nature] || [])) {
        if (seen.has(title)) continue;
        const book = $store.booksData.books.find(b => b.title === title);
        if (book) { seen.add(title); result.push(book); }
      }
    }
    return result;
  }

  let doTransition = false;
  function restart() { location.reload(); }
</script>

{#if !doTransition}
  <section transition:fade class="z-50">
    <div class="grid lg:grid-cols-2 h-screen w-screen">
      <div class="bg-black/50 flex flex-col justify-center items-center pt-2 overflow-y-auto">
        <h1 class="text-white text-box select-none p-0 mb-4 w-[80%] lg:w-[90%]">{strings.ResultMessage}</h1>
        <div class="flex flex-col justify-center items-center w-[90%] gap-6 pb-4">
          {#each resultBooks as book}
            <div class="text-center">
              <h2 class="text-white text-lg lg:text-xl font-bold mb-2">{book.title}</h2>
              <p class="text-white/75 text-sm lg:text-base mb-1">{book.author}</p>
              <p class="text-white/60 text-xs lg:text-sm max-w-xs">{book.description}</p>
            </div>
          {/each}
        </div>
        <button on:click={() => doTransition = true} class="text-white text-box p-2 my-4 w-[40%] lg:w-[30%]">{strings.Restart}</button>
      </div>
      <div class="bg-black/50 flex flex-col justify-center items-center pb-2">
        <RadialChart class="w-[75%] m-0 p-0" />
        <button on:click={() => doTransition = true} class="text-white text-box p-2 my-4 w-[75%] lg:w-[30%]">{strings.Restart}</button>
      </div>
    </div>
  </section>
{:else}
  <section transition:fade on:outroend={restart}><div class="fixed right-0 top-0 w-screen h-screen bg-black"></div></section>
{/if}
