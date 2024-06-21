<script>

  import TitleComponent from "../components/TitleComponent.svelte";
  import ContextScroller from "../components/Context/ContextScroller.svelte";
  import SpeedScroller from "../components/Speed/SpeedScroller.svelte";
  
  let count = 0;
  let index = 0;
  let offset = 0;
  let progress = 0;

</script>

<main>
  <video autoplay muted loop id="myVideo">
    <source src="./src/assets/videos/background.mp4" type="video/mp4">
  </video>

  <TitleComponent />
  <ContextScroller {index} {count} {offset} {progress}/>
  <SpeedScroller {index} {count} {offset} {progress}/>
</main>
