<script>
	import Scroller from "@sveltejs/svelte-scroller";
  import { onMount } from "svelte";
  import * as d3 from "d3";

  import DebugScroller from "../components/DebugScroller.svelte";
  import TitleComponent from "../components/TitleComponent.svelte";
  import BaseTimeline from "../components/BaseTimeline.svelte";
  import GreenSector from "../components/GreenSector.svelte";
  import BlueSector from "../components/BlueSector.svelte";
  import OrangeSector from "../components/OrangeSector.svelte";
  import YellowSector from "../components/YellowSector.svelte";
  import RedSector from "../components/RedSector.svelte";

  /* Variables para el scroller1 */
  let count;
  let index;
  let offset;
  let progress;
  let top = 0.1;
  let threshold = 0.5;
  let bottom = 0.9;

  let colors = ["#FD0000", "#00B1E1", "#FBD701", "#10C000"];

  $: pathLength =
    progress > -0.2 && progress < 0.985
      ? ((progress + 0.2) / 1.185) * 1310
      : progress >= 0.985
        ? 1310
        : 0;

  $: svgScale = 0.5; // offset > 0.2 && offset < 0.8 ? 0.5 :
  $: svgTransform = "translate(-5%, 0)"; //offset > 0.2 && offset < 0.8 ? : "translate(35%, 20%)";
  $: svgOpacity = 1; //offset > 0.2 && offset < 0.8 ? 1 : 0;
</script>

<head>
  <link rel="stylesheet" href="./src/style/styles.css" />
</head>

<main>
  <div class="center section">
  <TitleComponent />
  </div>
  <div style="height: 20vh;"></div>
  <div class="timeline section">
    <BaseTimeline />
    <GreenSector/>
    <BlueSector />
    <OrangeSector />
    <YellowSector />
    <RedSector />
  </div>
  <div class="separator"></div>
  {#if progress < 1}
    <DebugScroller {index} {count} {offset} {progress} />
  {/if}

  <Scroller
    {top}
    {threshold}
    {bottom}
    bind:count
    bind:index
    bind:offset
    bind:progress
  >
    <div
      slot="background"
      class="timeline-svg"
      style="transform: {svgTransform};"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="524"
        height="272"
        viewBox="0 0 524 272"
        fill="none"
        style="transform: scale({svgScale});"
      >
        <path
          d="M205.648 253.574C248.939 253.574 257.279 253.574 300.569 254.765C331.889 255.627 355.028 255.1 386.356 255.559L457.051 253.574C457.051 253.574 514.657 250.139 515.434 222.595C515.672 214.134 514.113 207.929 506 205.517H381.988C381.988 205.517 282.313 209.091 276.74 200.751C268.612 188.588 251.584 185.055 239.407 189.631C222.933 195.821 225.947 173.359 212.003 162.623C155.154 118.858 102.784 58.9645 87.2943 29.5746C82.5283 20.5316 81.3642 9.28458 65.8476 8.12778C43.4843 6.46053 12.628 21.6315 8.25919 23.2202C3.89042 24.8089 35.6632 95.5036 35.6632 95.5036C38.2531 95.9983 43.0533 97.1483 44.0036 99.8724C55.9184 134.028 49.961 159.049 61.0815 196.78C72.3446 234.994 82.5251 250.484 122.244 253.574C128.739 254.079 150.312 254.982 156.797 254.368C167.808 253.325 187.044 244.242 198.102 244.439C202.795 244.523 200.954 253.574 205.648 253.574Z"
          stroke="#F3F3F3"
          stroke-width="15"
          stroke-linejoin="round"
        />
        {#if pathLength}
          <path
            id="path"
            d="M310.648 254.574C248.939 253.574 257.279 253.574 300.569 254.765C331.889 255.627 355.028 255.1 386.356 255.559L457.051 253.574C457.051 253.574 514.657 250.139 515.434 222.595C515.672 214.134 514.113 207.929 506 205.517H381.988C381.988 205.517 282.313 209.091 276.74 200.751C268.612 188.588 251.584 185.055 239.407 189.631C222.933 195.821 225.947 173.359 212.003 162.623C155.154 118.858 102.784 58.9645 87.2943 29.5746C82.5283 20.5316 81.3642 9.28458 65.8476 8.12778C43.4843 6.46053 12.628 21.6315 8.25919 23.2202C3.89042 24.8089 35.6632 95.5036 35.6632 95.5036C38.2531 95.9983 43.0533 97.1483 44.0036 99.8724C55.9184 134.028 49.961 159.049 61.0815 196.78C72.3446 234.994 82.5251 250.484 122.244 253.574C128.739 254.079 150.312 254.982 156.797 254.368C167.808 253.325 187.044 244.242 198.102 244.439C202.795 244.523 200.954 253.574 205.648 253.574Z"
            fill="none"
            stroke={colors[index]}
            stroke-width="15"
            stroke-dasharray="1310"
            stroke-dashoffset="-{1310 - pathLength}"
          />
        {/if}
      </svg>
    </div>
    <div slot="foreground" class="foreground_container">
      <section class="step_foreground section">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Todos los deportistas</p>
        </div>
      </section>
      <section class="section"></section>

      <section class="step_foreground section">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas femeninas</p>
        </div>
      </section>
      <section class="step_foreground section">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas masculinos</p>
        </div>
      </section>
      <section class="step_foreground section">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas americanos</p>
        </div>
      </section>
    </div>
  </Scroller>
</main>
