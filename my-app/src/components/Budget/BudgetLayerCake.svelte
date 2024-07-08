<script>
  import { LayerCake, Html } from "layercake";
  import CirclePack from "./CirclePack.html.svelte";

  // This example loads csv data as json using @rollup/plugin-dsv
  import data from "/src/data/fruitGroups.csv";

  export let selectedYear; // Default value

  const idKey = "team";
  const colorKey = "color"; // Column for color

  let valueKey = `${selectedYear}`; // Dynamically set valueKey

  function modifyColorKeys(selectedYear) {
    const redTeams_2013 = []; // Replace with the actual teams for year x
    const redTeams_2014 = ["Ferrari", "Mercedes", "RedBull", "McLaren"]; // Replace with the actual teams for year x
    const redTeams_2015 = ["Mercedes", "Manor", "Sauber"]; // Replace with the actual teams for year y
    const redTeams_2016 = ["Mercedes", "Ferrari"]; // Replace with the actual teams for year z
    const redTeams_2017 = ["Mercedes", "Ferrari", "RedBull"]; // Replace with the actual teams for year z
    const redTeams_2018 = ["McLaren", "Aston Martin", "Sauber", "Haas"]; // Replace with the actual teams for year z
    const redTeams_2019 = ["Aston Martin", "Sauber", "Haas"]; // Replace with the actual teams for year z
    const redTeams_2020 = ["Williams", "Haas", "Aston Martin", "Mercedes", "Ferrari"]; // Replace with the actual teams for year z
    const redTeams_2021 = []; // Replace with the actual teams for year z
    const redTeams_2022 = ["Haas", "Williams", "Aston Martin", "Alphatauri", "Sauber"]; // Replace with the actual teams for year z
    const redTeams_2023 = ["Mercedes", "Ferrari", "RedBull","McLaren"]; // Replace with the actual teams for year z

    data.forEach((d) => {
      if (selectedYear === "2013") {
        d[colorKey] = redTeams_2013.includes(d[idKey]) ? "gray" : "gray";
      } else if (selectedYear === "2014") {
        d[colorKey] = redTeams_2014.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2015") {
        d[colorKey] = redTeams_2015.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2016") {
        d[colorKey] = redTeams_2016.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2017") {
        d[colorKey] = redTeams_2017.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2018") {
        d[colorKey] = redTeams_2018.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2019") {
        d[colorKey] = redTeams_2019.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2020") {
        d[colorKey] = redTeams_2020.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2021") {
        d[colorKey] = redTeams_2021.includes(d[idKey]) ? "gray" : "red";
      } else if (selectedYear === "2022") {
        d[colorKey] = redTeams_2022.includes(d[idKey]) ? "red" : "gray";
      } else if (selectedYear === "2023") {
        d[colorKey] = redTeams_2023.includes(d[idKey]) ? "red" : "gray";
      }
    });
  }

  $: modifyColorKeys(selectedYear); // Reactive statement to modify color keys when selectedYear changes

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
          {idKey}
          {valueKey}
          {colorKey}
          fill="#38383F"
          stroke="#F3F3F3"
          strokeWidth={1}
          textColor="#F3F3F3"
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
