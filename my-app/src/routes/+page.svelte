<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  import TitleComponent from "../components/TitleComponent.svelte";
  import TimelineScroller from "../components/TimelineScroller.svelte";
  import ContextScroller from "../components/ContextScroller.svelte";
  import SpeedScroller from "../components/SpeedScroller.svelte";
  
  let count = 0;
  let index = 0;
  let offset = 0;
  let progress = 0;

  let velocidades = []; // Initialize empty array to hold CSV data

  onMount(async () => {
      try {
          const response = await d3.dsv(';', './src/data/topSpeeds.csv', (d) => {
              return {
                  year: d.year,
                  speed: parseFloat(d.speed.replace(',', '.')) // Ensure the speed is parsed correctly
              };
          });

          velocidades = response;
          
      } catch (error) {
          console.error('Error loading CSV file:', error);
      }
  });

  // Ensure velocidades is reactive
  $: velocidades; // This ensures that velocidades is reactive

</script>

<main>
  <video autoplay muted loop id="myVideo">
    <source src="./src/assets/videos/background.mp4" type="video/mp4">
  </video>

  <TitleComponent />
  <!-- <TimelineScroller {index} {count} {offset} {progress} />
  <ContextScroller {index} {count} {offset} {progress}/>
  <div class="section"></div> -->
  <SpeedScroller {index} {count} {offset} {progress}/>
</main>
