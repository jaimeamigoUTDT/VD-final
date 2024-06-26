<script>
    import Scroller from "@sveltejs/svelte-scroller";
    import ConstructorStructre from "./DriversStructure.svelte";
  import DriversStructure from "./DriversStructure.svelte";
  
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
            <h1 class="title-drivers">
              Ranking histórico de equipos de F1 (1950-2023)
            </h1>
            </div>
            <div slot="foreground">
              <section class = "section">
                <DriversStructure driver = {0}/>
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
  
    .title-drivers {
        font-size: 2em;
        color: white;
        font-family: 'Formula 1';
        padding-top: 5vh;
    }
  </style>