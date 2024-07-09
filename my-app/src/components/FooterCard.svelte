<script>
  export let title;
  export let index;

  import Svelte from "$lib/assets/images/SVELTE.png";
  import D3 from "$lib/assets/images/D3.png";
  import JS from "$lib/assets/images/JS.png";
  import HTML from "$lib/assets/images/HTML.png";
  import CSS from "$lib/assets/images/CSS.png";
  import LAYERCAKE from "$lib/assets/images/LAYERCAKE.png";
  import FLOURISH from "$lib/assets/images/FLOURISH.png";


</script>

<div class="container">
  <h1 class="title">{title}</h1>
  {#if index === 0}
    <div class="text-container">
      <h2 class="subtitle">AUTOR</h2>
      <p class="text">Jaime Amigo</p>
      <h2 class="subtitle">CORRECCIONES Y COLABORACION</h2>
      <p class="text">Carlos Araujo</p>
      <p class="text">Juana Copello</p>
      <p class="text">Tomás Curzio</p>
      <h2 class="subtitle">OTROS TRABAJOS</h2>
      <p class="text">Dataviz - Gastronomía Argentina</p>
    </div>
  {/if}
  {#if index === 1}
    <div class="text-container">
      <h2 class="subtitle">RESULTADOS POR CARRERA</h2>
      <a class = "text" target=”_blank” href="https://www.kaggle.com/datasets/kshitij9/f1-2022-dataset">F1 - Dataset</a>
      <h2 class="subtitle">PRESUPUESTOS</h2>
      <a class = "text" target=”_blank” href="http://hdl.handle.net/10908/22386">Budget efficiency performance in Formula 1</a>
      <h2 class="subtitle">VELOCIDADES</h2>
      <p class="text">Buscadas en distintos articulos a lo 
        largo de internet</p>
    </div>
  {/if}
  {#if index === 2}
    <div class = "tech-grid">
        <img src={Svelte} alt="Svelte" width="90" height="90">
        <img src={D3} alt="D3" width="90" height="90">
        <img src={JS} alt="JavaScript" width="90" height="90">
        <img src={HTML} alt="HTML" width="90" height="90">
        <img src={CSS} alt="CSS" width="90" height="90">
        <img src={LAYERCAKE} alt="LayerCake" width="90" height="90">
        <img src={FLOURISH} alt="Flourish" width="110" height="60">

    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    height: 85vh;
    width: 25vw;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0px 25px 25px 0px;
    border-top: 10px solid #38383f;
    border-right: 10px solid #38383f;
    border-bottom: 10px solid #38383f;
  }

  .title {
    font-size: 2em;
    font-family: "Formula 1";
    color: #fa0000;
    font-family: "Formula 1";
    font-style: bold;
  }

  .subtitle {
    color: #fff;
    font-family: "Titillium Web";
    font-size: 1.3em;
    font-style: normal;
  }

  .text {
    color: #fff;
    font-family: "Titillium Web";
    font-size: 1.3em;
    font-style: normal;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 15px;
    padding-left: 10px;
  }
</style>
