<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { fade, scale } from "svelte/transition";
  import SpeedStructure from "./SpeedStructure.svelte";

  export let top = 0;
  export let threshold = 0.5;
  export let bottom = 1;
  export let count;
  export let index;
  export let offset;
  export let progress;

  let currentTitle = '';
  let currentBody = '';

  function typeText(text, callback) {
        let i = 0;
        let interval = setInterval(() => {
            if (i < text.length) {
                callback(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 25); // Adjust typing speed here
    }

    $: {
        typeText("El correcaminos de los deportes", (typedText) => currentTitle = typedText);
        typeText("Un auto rápido es un auto ganador. Por esta razón, los fabricantes buscan constantemente nuevas formas de mejorar la velocidad de sus autos, realizando pequeños ajustes que prometen aumentarla. Los ajustes pueden ocurrir de carrera en carrera durante una temporada, o de temporada en temporada. Pero hubo ciertos cambios que revolucionaron la formula 1.", (typedText) => currentBody = typedText);
    }

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
    <div slot="background" class="section">
      <SpeedStructure actual_index={index} />
    </div>
    <div slot="foreground">
      <section class="section">
        <div class="column-container">
          <h1 class="title" transition:fade={{ duration: 500 }}>
            {currentTitle}
          </h1>
          <div class="text-container">
            <p class="text" transition:fade={{ duration: 500 }}>
              {currentBody}
            </p>
          </div>
        </div>
      </section>
      <section class="section"></section>
      <section class="section"></section>
      <section class="section"></section>
      <section class="section"></section>
      <section class="section"></section>
    </div>
  </Scroller>
</main>

<style>
  .column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    gap: 5vh;
  }

  .title {
    font-family: "Formula 1";
    font-style: bold;
    font-size: 3.2vw;
    color: #f3f3f3;
    text-align: center;
    margin: 0;
    width: 70vw;
    padding-top: 25vh;
  }

  .text-container {
    height: 20vh; /* Fixed height for text container */
    width: 58vw;
    overflow: visible; /* Hide overflow if text exceeds container */
  }

  .text {
    font-size: 1.4vw;
    color: #f3f3f3;
    text-align: justify;
    font-family: "Titillium Web", "sans-serif";
    font-weight: 400;
    line-height: 200%;
    width: 100%;
  }
</style>
