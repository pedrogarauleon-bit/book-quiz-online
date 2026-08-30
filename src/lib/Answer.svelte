<script>
  import { createEventDispatcher } from 'svelte';
  import { store } from '../assets/store.js';

  export let answer = { id: 0, response: '', scores: [] };
  export let disabled = false;
  export let clicked = false;

  const dispatch = createEventDispatcher();

  function choose() {
    if (disabled || clicked) return;
    clicked = true;
    for (const score of answer.scores || []) {
      $store.points[score.nature] = ($store.points[score.nature] || 0) + Number(score.points || 0);
    }
    dispatch('message', { id: answer.id });
  }

  function hover(type) {
    if (!clicked) dispatch('event', { type, id: answer.id });
  }
</script>

<button
  class="answer text-white text-left"
  class:disabled
  class:chosen={clicked}
  disabled={disabled && !clicked}
  on:click={choose}
  on:mouseenter={() => hover('mouseenter')}
  on:mouseleave={() => hover('mouseleave')}
>
  {answer.response}
</button>

<style>
  .answer {
    width: min(90vw, 760px);
    margin: .35rem 0;
    padding: 1rem 1.25rem;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: .5rem;
    background: rgba(0,0,0,.55);
    cursor: pointer;
    transition: opacity .2s, transform .2s, background .2s;
  }
  .answer:hover:not(:disabled) { transform: translateX(-4px); background: rgba(255,255,255,.12); }
  .answer.chosen { background: rgba(255,255,255,.2); }
  .answer.disabled { opacity: .35; }
</style>
