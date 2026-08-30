<script>
  import { fade, slide } from 'svelte/transition';
  import { store } from '../assets/store.js';

  let descriptions = [];
  let index = 0;
  export let finish = false;
  let startTransition = false;

  function getDescriptions(description = '') {
    return description.split('.').filter(s => s.trim().length > 0).map((s, i, a) => i < a.length - 1 ? s + '...' : s);
  }

  $: if ($store.weightedPoints && $store.natureDescription) {
    const ordered = Object.keys($store.weightedPoints).sort((a, b) => $store.weightedPoints[b] - $store.weightedPoints[a]);
    descriptions = getDescriptions($store.natureDescription[ordered[0]]);
  }

  function onPointerDown() {
    if (!descriptions.length) return;
    index++;
    if (index >= descriptions.length) {
      startTransition = true;
      index = descriptions.length - 1;
      finish = true;
    }
  }
</script>

{#if !startTransition}
<section class="select-none z-50">
  <div class="flex flex-col w-screen h-screen text-center justify-center items-center bg-black/[0.65]" on:pointerdown={onPointerDown} transition:fade>
    {#key index}
      <h1 class="text-yellow-50 text-base sm:text-xl md:text-4xl pointer-events-none w-[75%] select-none" transition:slide>
        {descriptions[index]}
      </h1>
    {/key}
    <div class="arrow-down animate-pulse"></div>
  </div>
</section>
{/if}
