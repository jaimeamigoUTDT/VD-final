<head>
    <link rel="stylesheet" href="./src/style/styles.css" />
</head>

<script>
	  import Scroller from "@sveltejs/svelte-scroller";
    import BaseTimeline from "./BaseTimeline.svelte";
    import MaskTimeline from "./MaskTimeline.svelte";
    
    export let top = 0;
    export let threshold = 0.5;
    export let bottom = 1;
    export let count;
    export let index;
    export let offset;
    export let progress;

    $: svgDashOffset = progress > 0 && progress < 1? -1310 * (1 - progress) + 262: 262;
    $: svgDashArray = index === 5? 1310: 262;
  
</script>
<main>
<Scroller
    {top}
    {threshold}
    {bottom}
    bind:count
    bind:index
    bind:offset
    bind:progress
  >
    <div slot="background" class="section timeline-wrapper">
      <BaseTimeline />
      <MaskTimeline dashOffset={svgDashOffset} dashArray = {svgDashArray} />
    </div>
    <div slot="foreground">
      <section class="section"></section>
      <section class="section"></section>
      <section class="section"></section>
      <section class="section"></section>
      <section class="section"></section>
      <section class="section"></section>
    </div>
  </Scroller>
</main>

<style>
    .timeline-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    }
</style>