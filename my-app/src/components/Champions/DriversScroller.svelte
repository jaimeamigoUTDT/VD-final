<script>
    import Scroller from "@sveltejs/svelte-scroller";
    import { fade, scale } from "svelte/transition";
    import DriversStructure from "./DriversStructure.svelte";
    import Carousel from "../Carousel.svelte";
    import DriverCard from "./DriverCard.svelte";
  
    export let top = 0;
    export let threshold = 0.5;
    export let bottom = 1;
    export let count;
    export let index;
    export let offset;
    export let progress;

  let currentTitle = '';
  let currentBody = '';

  let names = ['Lewis','Michael', 'Sebastian', 'Alain', 'Max', 'Ayrton', 'Bertrand', 'Arturo', 'Fernando']
  let surnames = ['Hamilton', 'Schumacher','Vettel','Prost','Verstappen', 'Senna','Gachot','Merzario','Alonso']
  // let nationalities = ['UK', 'GER', 'GER', 'FRA', 'HOL', 'BRA', 'LUX', 'ITA', 'ESP']
  let points = [4026,3626,2620,2526,2349,2179,1983,1939,1930]
  let colors = ['#27f4d2','#e80020','#3671c6','#e80020','#3671c6','#ff8000','#229971','#e80020','#229971']

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
        typeText("Maximos ganadores históricos", (typedText) => currentTitle = typedText);
        typeText("Una competencia no es comptenecia si no tiene ganadores y perdedores. A lo largo de los años la formula 1 fue cambiando su formato, sumando circuitos nuevos, más equipos, menos pilotos, etc. es por eso que es muy difícil hacer un ranking de todos los pilotos de la historia sin que haya controversia. Para esta historia, decidí desarrollar mi propio sistema de puntuación usando conceptos similares a los que se usan en la puntuación de ajedrez y tennis.", (typedText) => currentBody = typedText);
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
          <div slot="background" class="section main-section">
            {#if index === 1 || index === 2}
            <h1 class="title-drivers">
              Ranking histórico de pilotos de F1 (1950-2023)
            </h1>
            {/if}
            </div>
            <div slot="foreground">
              <section class="section">
                <div class ="column-container">
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
              <section class = "section">
                <DriversStructure driver = {1}/>
              </section>
              <section class = "section">
                <div class = "carousel-container">
                  <Carousel autoplay="5000">
                    {#each names as name, index (index)}
                      <div>
                        <DriverCard 
                        name={name} 
                        surname = {surnames[index]}
                        points = {points[index]}
                        color = {colors[index]}/>
                      </div>
                    {/each}
                    <span slot="left-control">Left</span>
                    <span slot="right-control">Right</span>
                  </Carousel>
                </div>
              </section>
            </div>
      </Scroller>
  </main>
  
  <style>

    .main-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .column-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      gap: 5vh;
    }
  
    .title-drivers {
        font-size: 35px;
        color: white;
        font-family: 'Formula 1';
        padding-top: 5vh;
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
      font-size: 1.4vw;
      color: #f3f3f3;
      text-align: justify;
      font-family: "Titillium Web", "sans-serif";
      font-weight: 400;
      line-height: 200%;
      width: 100%;
    }

    .carousel-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 10vh;
      }

  </style>