<script>
  import { LayerCake, Html } from "layercake";
  import CirclePack from "./CirclePack.html.svelte";
  
  // This example loads csv data as json using @rollup/plugin-dsv
  import data from "/src/data/fruitGroups.csv";

  export let selectedYear; // Default value

  const idKey = "team";
  const colorKey = "color"; // Column for color
  let valueKey = `${selectedYear}`; // Dynamically set valueKey

  $: valueKey = `${selectedYear}`; // Reactive statement to update valueKey

  function processData() {
      data.forEach((d) => {
          d[valueKey] = +d[valueKey];
          d[colorKey] = d[colorKey];
      });
  }

  $: processData(); // Reactive statement to process data when valueKey changes
</script>

<main>
<div class="chart-container">
  <LayerCake padding={{ top: 0, bottom: 0, left: 0 }} {data}>
    <Html>
      <CirclePack
        idKey={idKey}
        valueKey={valueKey}
        colorKey={colorKey}
        fill='#38383F'
        stroke='#F3F3F3'
        strokeWidth={1}
        textColor='#F3F3F3'
      />
    </Html>
  </LayerCake>
</div>
</main>

<style>
  .chart-container {
    height: 80vh;
    width: 50vw;
  }
</style>
