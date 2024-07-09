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

    let textos = {
        0: "Un auto rápido es un auto ganador. Por esta razón, los fabricantes buscan constantemente nuevas formas de mejorar la velocidad de sus autos, realizando pequeños ajustes que prometen aumentarla. Los ajustes pueden ocurrir de carrera en carrera durante una temporada, o de temporada en temporada. Pero hubo ciertos cambios que revolucionaron la formula 1.",
        1: "A fines de los 70s y principio de los 80s, llegaron a la formula 1 los motores turboalimentados. Estos motores podían producir más de 1,000 caballos de fuerza permitiendo alcanzar velocidades de 321 km/h.",
        2: "En 1982 se introdujo el primer auto con efecto suelo, el Lotus 78. Diseñado por Chapman y su equipo, este auto generaba una fuerza descendente que lo mantenía pegado al suelo. Generando así mayor agarre y velocidad en las curvas. Este año. la velocidad rompió la barrera de los 330 km/h.",
        3: "Tras la prohibicion del efecto suelo, en 1992 y 1993 el equipo Williams dominó la formula 1 con un sistema de suspensión activa. Este sistema permitía que el auto se mantuviera mas estable durante la carrera permitiendo una velocidad promedio mas elevada. Sin embargo, este sistema fue prohibido en 1994 por la FIA.",
        4: "En 2011 se introdujo el sistema DRS (Drag Reduction System) en la formula 1. Este sistema permite a los pilotos abrir una compuerta en el alerón trasero del auto, reduciendo la resistencia al aire y aumentando la velocidad máxima del auto entre 15 y 20 km/h en las líneas rectas.",
        5: "En 2014 se introdujeron los motores híbridos a la formula 1. Estos motores utilizan un sistema de recuperación de energía cinética (ERS) que permite a los autos recargar sus baterías durante las frenadas y utilizar esa energía para aumentar la potencia del motor en las rectas.",
    };

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
            <p class="subtitle" transition:fade={{ duration: 500 }}>
              {currentBody}
            </p>
          </div>
        </div>
      </section>
      <section class="section"> <p class="text">{textos[index]}</p></section>
      <section class="section"> <p class="text">{textos[index]}</p></section>
      <section class="section"> <p class="text">{textos[index]}</p></section>
      <section class="section"> <p class="text">{textos[index]}</p></section>
      <section class="section"> <p class="text">{textos[index]}</p></section>
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
    padding-top: 25vh;
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
        line-height: 170%;
        margin-right: 10vw;
        width: 40vw;
        padding-top: 30vh;
        padding-left: 44vw;
    }

  .subtitle {
    font-size: 1.5em;
        color: #f3f3f3;
        text-align: justify;
        font-family: "Titillium Web", "sans-serif";
        font-weight: 400;
        line-height: 170%;
        margin-right: 10vw;
        width: 60vw;
  }
</style>
