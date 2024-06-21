<script>
	export let actual_index;

  $: titleVisibility = actual_index === 0 ? 'visible' : 'hidden';
  $: textVisibility = actual_index === 0 || actual_index === 1 ? 'visible' : 'hidden';
  $: textOpacity = actual_index === 0? 1 : 0;
  $: textPosition = actual_index === 1  || actual_index === 2? "translate(0px, -30vh)" : "translate(0px, 0px)";

  $: imageVisibility = actual_index === 1 ? 'visible' : 'hidden';
  $: imageOpacity = actual_index === 1 ? 1 : 0;

</script>

<main class="container">
  <div class="main-title">
    <h1 class="title" style="visibility: {textVisibility};">Han pasado 74 años...</h1>
  </div>
  <div class="intro-div" style="transform: {textPosition}; opacity: {textOpacity}; visibility: {textVisibility};">
    <p class="body">
      La Fórmula 1 comenzó en el año 1950, con el Gran Premio de Gran Bretaña
      en Silverstone, y desde entonces ha sido el pináculo del automovilismo
      deportivo. La competición ha evolucionado a lo largo de los años, con
      cambios en las reglas y en la tecnología de los coches, pero siempre ha
      mantenido su espíritu de competencia y emoción.
    </p>
  </div>

  <div class="image-with-text" style="opacity: {imageOpacity}; visibility: {imageVisibility};">

    <fieldset class="label gradient-border" style="width: min-content;">
      <legend class="text-for-image">Primer GP de Fórmula 1</legend>
      <img class="image" src="../src/assets/images/f1-first-image.jpg" alt="1950-first-GP" />
    </fieldset>

    <fieldset class="label gradient-border" style="width: min-content;">
      <legend class="text-for-image">Primer campeón de Fórmula 1</legend>
      <img class="image" src="../src/assets/images/f1-first-champion.jpg" alt="1950-champion" />
    </fieldset>

  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ensure the main takes up the full viewport height */
  }
  .main-title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
    top:10vh;
    }

  .title {
    font-family: "Formula 1";
    font-style: bold;
    font-size: 4.25vw;
    color: #f3f3f3;
    text-align: center;
    margin: 0px;
    transition: transform 0.5s ease;
  }

  .intro-div {
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
  }

  .body {
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1.5vw;
    color: #f3f3f3;
    text-align: justify;
    line-height: 200%;
    position: absolute;
  }

  .image-with-text {
    position: absolute;
    width: 75vw;
    height: auto;
    bottom: 10vh;
    display: flex;
    justify-content: space-between; /* Separate the fieldsets as much as possible */
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  .image {
    position: relative;
    width: auto;
    height: 40vh;
    z-index: 1;
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
    padding-top: 2vh;
    padding-right: 3vh;
    padding-bottom: 3vh;
    padding-left: 0vh;
  }

  .gradient-border {
    position: relative;
    border-width: 10px;
    border-left: 0px;
    padding-top: 2vh;
    padding-right: 3vh;
    padding-bottom: 3vh;
    padding-left: 0vh;
    border-image: linear-gradient(45deg, #FA0000, #15151E) 1;
    animation: moveGradient 10s alternate infinite;
  }

  @keyframes moveGradient {
    50% {
      border-image: linear-gradient(-135deg, #FA0000, #15151E) 1;
    }
  }
</style>
