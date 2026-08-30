<script>
  import Carousel from 'svelte-carousel';
  import Question from './Question.svelte';
  import { store } from '../assets/store.js';
  import NatureDecriptor from './NatureDecriptor.svelte';
  import ResultScreen from './ResultScreen.svelte';
  import { onMount } from 'svelte';
  import * as utils from '../assets/utils.js';

  let data = [];
  let numberOfQuestions = 10;
  let questions = [];
  let index = 0;
  let natureDescriptionFinished = false;
  export let dataExt = null;
  let carousel = null;

  function getRandomNumOfQuestions(count) {
    const result = [];
    while (result.length < count) {
      const q = data[Math.floor(Math.random() * data.length)];
      if (q && !result.includes(q)) result.push(q);
    }
    return result;
  }

  function onCorrectQuestion() {
    carousel?.goToNext();
    index++;
    updateData();
  }

  function updateData() {
    if (!$store.points || !$store.maxPoints) return;
    const values = {};
    for (const [key, value] of Object.entries($store.points)) {
      values[key] = $store.maxPoints[key] ? value / $store.maxPoints[key] : 0;
    }
    $store.weightedPoints = values;
  }

  onMount(() => {
    $store.natures = dataExt.natures;
    $store.questions = dataExt.questions;
    $store.natureToBooks = dataExt.natureToBooks;
    $store.natureDescription = dataExt.natureDescription;
    $store.strings = dataExt.strings;
    $store.booksData = dataExt.booksData;
    $store.points = dataExt.natures.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
    $store.maxPoints = utils.getMaxPoints($store.points, $store.questions);
    updateData();

    data = $store.questions;
    numberOfQuestions = $store.numQuestions;
    questions = numberOfQuestions > 0 ? getRandomNumOfQuestions(numberOfQuestions) : data;
  });
</script>

{#if index !== numberOfQuestions}
  <Carousel bind:this={carousel} infinite={false} dots={false} arrows={false} swiping={false}>
    {#each questions as question (question.id)}
      <Question on:correctQuestion={onCorrectQuestion} questionData={question} />
    {/each}
  </Carousel>
{:else if !natureDescriptionFinished}
  <NatureDecriptor bind:finish={natureDescriptionFinished} />
{:else}
  <ResultScreen />
{/if}
