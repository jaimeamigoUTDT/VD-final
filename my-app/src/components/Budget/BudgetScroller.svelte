<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import BudgetStructure from "./BudgetStructure.svelte";
  import { fade, scale } from "svelte/transition";
  
  
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
        typeText("La plata es velocidad", (typedText) => currentTitle = typedText);
        typeText("Otro componente fundamental para el buen funcionamiento de un equipo es la plata que invierten los equipos año a año en el desarrollo y funcionamiento de sus autos y el equipo. Dependiendo de el tamaño, éxito y sponsors de los equipos, cada uno cuenta con distintos presupuestos, algunos mayores que otros.", (typedText) => currentBody = typedText);
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
        bind:progress>
        <div slot="background" class="section">
          <BudgetStructure actual_index = {index}/>
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
    font-size: 35px;
    color: #f3f3f3;
    text-align: center;
    margin: 0;
    width: 70vw;
    padding-top: 15vh;
  }

  .text-container {
    height: 20vh; /* Fixed height for text container */
    width: 58vw;
    overflow: visible; /* Hide overflow if text exceeds container */
  }

  .text {
    font-size: 1.5em;
    color: #f3f3f3;
    text-align: justify;
    font-family: "Titillium Web", "sans-serif";
    font-weight: 400;
    line-height: 200%;
    width: 100%;
  }
  </style>