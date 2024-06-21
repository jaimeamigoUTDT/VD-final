<script>
    export let actual_index;
  
    // Define reactive variables
    $: textVisibility = actual_index === 0 || actual_index === 1 ? 'visible' : 'hidden';
    $: textOpacity = actual_index === 0 ? 1 : 0;
    $: textPosition = actual_index === 1 || actual_index === 2 ? "translate(0px, -30vh)" : "translate(0px, 0px)";
    $: imageVisibility = actual_index === 1 ? 'visible' : 'hidden';
    $: imageOpacity = actual_index === 1 ? 1 : 0;
  </script>
  
  <main class="container">
    <div class="main-title">
        <h1 class="title" style="visibility: {textVisibility};">La chispa de la combustión</h1>
      </div>
    <div class="intro-div" style="transform: {textPosition}; opacity: {textOpacity}; visibility: {textVisibility};">
      <p class="body">
        El fanatismo por la Fórmula 1 surge de la adrenalina y emoción que generan las carreras, la 
        admiración por la habilidad y valentía de los pilotos, y la fascinación por la tecnología de vanguardia
        de los autos. Es un deporte que combina velocidad, estrategia y drama, cautivando a millones
        de seguidores en todo el mundo.
      </p>
    </div>
  
    <div class="image-with-text" style="opacity: {imageOpacity}; visibility: {imageVisibility};">
        <fieldset class="label gradient-border" style="width: min-content;">
            <legend class="text-for-image">Tifosi (fans de Ferrari) en 1996</legend>
            <img class="image" src="../src/assets/images/Tifosi_GP_Monza_1996.jpg" alt="Tifosi 1996" />
          </fieldset>
      
          <fieldset class="label gradient-border" style="width: min-content;">
            <legend class="text-for-image">Melbourne GP, 2017</legend>
            <img class="image" src="../src/assets/images/melbourne-fans.jpeg" alt="Melbourne 2017" />
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
    font-size: 4vw;
    color: #f3f3f3;
    text-align: center;
    margin: 0px;
    transition: transform 0.5s ease;
  }

    .intro-div {
      width: 60vw; /* Initial width */
      transition: width 0.2s ease, transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease; /* Smooth transition */
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
      width: 75vw; /* Initial width */
      height: auto;
      bottom: 10vh;
      display: flex;
      justify-content: space-between;
      transition: opacity 0.5s ease, visibility 0.5s ease; /* Smooth opacity and visibility transition */
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
  