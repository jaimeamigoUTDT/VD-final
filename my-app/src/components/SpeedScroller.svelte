<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import Velocimeter from "./Velocimeter.svelte";
  import DebugScroller from "./DebugScroller.svelte";

  export let top = 0;
  export let threshold = 0.5;
  export let bottom = 1;
  export let count;
  export let index;
  export let offset;
  export let progress;

  $: text1opacity = index === 0 ? 1 : 0;
  $: text1visibility = index === 0 ? 'visible' : 'hidden';

  $: text2opacity = index === 1 ? 1 : 0;
  $: text2visibility = index === 1 ? 'visible' : 'hidden';

  $: text3opacity = index === 2 ? 1 : 0;
  $: text3visibility = index === 2 ? 'visible' : 'hidden';
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
      <h1 class="title padding-50">
        El correcaminos de los deportes
      </h1>
    </div>
    <div slot="foreground">
      <section class="section">
        <p class="body" style="opacity: {text1opacity}; visibility: {text1visibility}">
          La velocidad en la Fórmula 1 es la estadística que los pilotos y equipos buscan maximizar. 
          Un auto rápido es un auto ganador. Por esta razón, los fabricantes buscan constantemente nuevas formas 
          de mejorar la velocidad de sus autos, realizando pequeños ajustes que prometen aumentarla. Los cambios 
          más significativos en la velocidad suelen venir de la mano de modificaciones en las regulaciones de la Fórmula 1, ya que 
          estas obligan a los equipos a diseñar partes innovadoras para sus autos.
        </p>
      </section>
      <section class="section">
        <p class="body" style="opacity: {text2opacity}; visibility: {text2visibility}">
          La velocidad se puede maximizar de diversas maneras, como reduciendo el peso de los autos para mejorar 
          su agilidad y eficiencia, optimizando la aerodinámica para aumentar la velocidad en las rectas y mejorar 
          la estabilidad en las curvas, incrementando la potencia del motor para lograr aceleraciones más rápidas y 
          una velocidad máxima superior, y explorando otras innovaciones tecnológicas y estrategias de diseño que 
          optimicen el rendimiento general del vehículo en pista.
        </p>
      </section>
      <section class="section">
        <p class="body" style="opacity: {text3opacity}; visibility: {text3visibility}">
          Pero los cambios no ocurren de un día para otro. A lo largo de la historia de la Fórmula 1, los autos han
          ido evolucionando para alcanzar velocidades cada vez más altas. Estos fueron los cambios más significativos
          en la velocidad máxima de los autos de Fórmula 1 a lo largo de los años.
        </p>
      </section>
      <section class="section">
        <div id="whole-page" style="background-color: red; width: 100vw; height: 100vh;">
          <div id="green-rectangle1" style="background-color: green;"></div>
          <div id="green-rectangle2" style="background-color: green;">
                <div id="yellow-square1" style="background-color: yellow;">
                  <Velocimeter />
                </div>
                <div id="yellow-square2" style="background-color: yellow;">
                <fieldset class="label gradient-border">
                  <legend class="text-for-image">1980</legend>
                  <p class="text">A fines de los 70s y principio de los 80s, llegaron a la formula 1 los motores
                    turboalimentados. El primer equipo en desarrollarlo fue Renault en 1980, y los siguieron
                    BMW, Honda, Porche, Ford y otroos. Estos motores podían producir más de 1,000 caballos de fuerza
                    en contraste a los 285 a 500 caballos de fuerza que producían los motores en décadas anteriores. Para el 
                    año 1985, todos los equipos que participaban en la Fórmula 1 utilizaban motores turboalimentados.
                  </p>
                </fieldset>
              </div>
          </div>
        </div>
      </section>
      <section class="section"></section>
    </div>
  </Scroller>

  {#if progress <= 1}
    <DebugScroller {index} {count} {offset} {progress} />
  {/if}
</main>

<style>
  .text {
    font-family: "Titillium Web", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.5vw; /* Adjusted font size to fit within the yellow square */
    color: #f3f3f3; /* Changed text color to black for better visibility on yellow background */
    text-align: justify;
  }

  .padding-50 {
    padding-top: 50px;
  }

  .title {
    font-family: "Formula 1";
    font-style: bold;
    font-size: 4.25vw;
    color: #f3f3f3;
    text-align: center;
    margin: 0px;
  }

  .body {
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1.75vw;
    color: #f3f3f3;
    text-align: justify;
    line-height: 200%;
    position: relative;
    width: 90vw;
    top: 35vh;
    left: 4vw;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  .section {
    position: relative;
  }

  #whole-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  #green-rectangle1 {
    height: 30vh;
    display: flex;
    flex-direction: column;
  }

  #green-rectangle2 {
    height: 65vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5vw 0 5vw;
  }

  #yellow-square1 {
    position: relative;
    width: 40vw;
    height: 90%;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;  
    justify-content: center;
    align-items: center;
  }

  #yellow-square2 {
    position: relative;
    width: 40vw;
    height: 90%;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;  
    justify-content: center;
    align-items: end;
  }

  .image-with-text {
    position: relative;
    width: inherit;
    bottom: 10vh;
    display: flex;
    justify-content: space-between; /* Separate the fieldsets as much as possible */
    transition: opacity 0.5s ease, visibility 0.5s ease;
    
  }

  .text-for-image {
    font-family: "Titillium Web", sans-serif;
    font-weight: 600;
    font-size: 1.7vw;
    color: #f3f3f3;
    padding-right: 2vh;
  }

  .label {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 0vh;
  }

  .gradient-border {
    position: relative;
    border-width: 10px;
    border-left: 0px;
    border-image: linear-gradient(45deg, #FA0000, #15151E) 1;
    animation: moveGradient 10s alternate infinite;
  }

  @keyframes moveGradient {
    50% {
      border-image: linear-gradient(-135deg, #FA0000, #15151E) 1;
    }
  }
</style>
