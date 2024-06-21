<script>
    import { LayerCake, Html } from "layercake";
    import CirclePack from "./CirclePack.html.svelte";

    // This example loads csv data as json using @rollup/plugin-dsv
    import data from "/src/data/fruitGroups.csv";

    const idKey = "fruit";
    const valueKey = "value";

    data.forEach((d) => {
        d[valueKey] = +d[valueKey];
    });
</script>

<main>
    
  <div class="chart-container">
    <LayerCake
      padding={{ top: 0, bottom: 20, left: 30 }}
      {data}
    >
      <Html>
        <CirclePack
          idKey={idKey}
          valueKey={valueKey}
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
      width: 100%;
      height: 100vh;
    }
  </style>