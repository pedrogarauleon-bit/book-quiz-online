<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import { store, radialChartConfig } from '../assets/store.js';

  let chart = null;
  let myChart = null;
  let classes = '';

  $: if (myChart && $store.weightedPoints) updateData();

  function createData() {
    const labels = Object.keys($store.points || {});
    const values = labels.map(key => (($store.points[key] || 0) / ($store.maxPoints?.[key] || 1)) + 0.05);
    return { labels, datasets: [{ label: $store.strings?.radarChartLabel || 'Book affinity', data: values, borderWidth: 1 }] };
  }

  function updateData() {
    if (!myChart) return;
    const labels = Object.keys($store.points || {});
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = labels.map(key => (($store.points[key] || 0) / ($store.maxPoints?.[key] || 1)) + 0.05);
    myChart.update();
  }

  onMount(() => {
    myChart = new Chart(chart.getContext('2d'), {
      type: 'radar',
      data: createData(),
      options: { ...radialChartConfig, plugins: { ...radialChartConfig.plugins, title: { ...radialChartConfig.plugins.title, text: $store.strings?.radarChartLabel || 'Book affinity' } } }
    });
    return () => myChart?.destroy();
  });
</script>

<div class="h-fit min-w-screen rounded-xl p-2 transition-all text-box {classes}">
  <canvas bind:this={chart}></canvas>
</div>
