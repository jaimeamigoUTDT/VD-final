<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { onMount } from "svelte";
  import * as d3 from "d3";

  import DebugScroller from "../components/DebugScroller.svelte";

  /* Variables para el scroller1 */
  let count;
  let index;
  let offset;
  let progress;
  let top = 0.1;
  let threshold = 0.5;
  let bottom = 0.9;

  let colors = ["#FD0000","#00B1E1","#FBD701", "#10C000"]

  $: pathLength = progress > -0.2 && progress < 0.985 
    ? ((progress + 0.2) / 1.185) * 1310 
    : (progress >= 0.985 ? 1310 : 0);

  $: svgScale = offset > 0.2 && offset < 0.8 ? 0.5 : 1.5;
  $: svgTransform = offset > 0.2 && offset < 0.8 ? "translate(-5%, 0)" : "translate(35%, 20%)";
  </script>

<head>
  <link rel="stylesheet" href="./src/style/styles.css" />
</head>

<main>
  <div style="height:10vh;"></div>
  <div class="header padding-50">
    <img
      class="center f1-logo"
      src="../src/assets/images/f1_logo.png"
      alt="f1 logo"
    />
    <h3 class="title padding-50">
      <b>La historia a 300km/h</b>
    </h3>
    <p class="subtitle padding-50">Formula 1 contada a través de los datos</p>
  </div>
  <div style="height:50vh;"></div>
  
  <div class="header">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="524"
        height="272"
        viewBox="0 0 524 272"
        fill="none"
        style="transform: scale({1.5});"
      >
        <path
          d="M8.02276 33.2146C8.33805 40.2705 12.5257 50.2597 19.0738 65.2558C24.6402 78.0039 30.3009 92.176 31.6549 96.75L34.1166 105.066L39.0279 106.912C42.7013 108.293 43.9903 109.317 44.1447 110.979C45.6154 126.803 58.7517 201.586 61.4108 209.271C74.5848 247.342 99.35 263.15 144.816 262.514C153.364 262.394 160.593 262.413 160.882 262.556C161.78 262.998 177.686 258.865 186.828 255.814C197.091 252.389 198.146 252.516 198.56 257.218C199.046 262.737 187.708 262.197 305.92 262.328C324.142 262.349 359.178 262.648 383.779 262.993L428.506 263.618L455.319 260.307C496.876 255.175 509.807 248.129 515.189 227.693C517.724 218.068 516.711 213.984 510.009 206.831C505.216 201.715 502.085 201.071 480.4 200.723C469.778 200.553 424.075 199.847 378.839 199.155C274.749 197.561 279.532 197.893 274.719 191.931C269.34 185.275 259.783 182.5 248.773 184.399C240.136 185.889 243.702 188.395 213.383 159.55C125.193 75.6758 133.643 85.1788 94.3826 25.7495C80.7066 5.06538 83.6226 6.32439 59.0824 10.4994C20.9292 16.9894 7.41715 19.7665 8.01916 33.2365L8.02276 33.2146Z"
          stroke="#F3F3F3"
          stroke-width="15"
          stroke-linejoin="round"
        />
      </svg>
  </div>
  <div class = "separator"></div>
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
      style="
      
      transform: {svgTransform};"
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
            stroke= {colors[index]}
            stroke-width="15"
            stroke-dasharray="1310"
            stroke-dashoffset="-{1310 - pathLength}"
          />
        {/if}
      </svg>
    </div>
    <div slot="foreground" class="foreground_container">
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Todos los deportistas</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas femeninas</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas masculinos</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas americanos</p>
        </div>
      </section>
    </div>
  </Scroller>
</main>
