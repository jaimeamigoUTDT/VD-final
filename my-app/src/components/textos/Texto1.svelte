<script>
	export let actual_index;

  $: textVisibility = actual_index === 0 || actual_index === 1 ? 'visible' : 'hidden';
  $: textOpacity = actual_index === 0 || actual_index === 1 ? 1 : 0;
  $: textPosition = actual_index === 1  || actual_index === 2? "translate(0px, -30vh)" : "translate(0px, 0px)";
  $: imageVisibility = actual_index === 1 ? 'visible' : 'hidden';
  $: imageOpacity = actual_index === 0 ? 0 : 1;
</script>

<main class="container">
  <div class="intro-div" style="transform: {textPosition}; opacity: {textOpacity}; visibility: {textVisibility};">
    <p class="body">
      La Fórmula 1 comenzó en el año 1950, con el Gran Premio de Gran Bretaña
      en Silverstone, y desde entonces ha sido el pináculo del automovilismo
      deportivo. La competición ha evolucionado a lo largo de los años, con
      cambios en las reglas y en la tecnología de los coches, pero siempre ha
      mantenido su espíritu de competencia y emoción.
    </p>
  </div>
  <div>
    <div id="border"></div>
    <img class="image" src="../src/assets/images/f1-first-image.jpg" alt="1950" style="opacity: {imageOpacity}; visibility: {imageVisibility};" />
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

  .intro-div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
  }

  .body {
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1.3vw;
    color: #f3f3f3;
    text-align: justify;
    line-height: 200%;
    position: absolute;
  }

  .image {
    position: absolute;
    width: 50%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    left: 15vh;
    bottom: 15vh;
    transition: opacity 1s ease-in, visibility 1s ease-in;
    border-top: 10px solid #FA0000;
    border-bottom: 10px solid #FA0000;
    border-left: 0px;
    border-right: 10px solid #FA0000;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }

</style>
