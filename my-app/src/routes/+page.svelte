<script>

  import TitleComponent from "../components/TitleComponent.svelte";
  import TimelineScroller from "../components/TimelineScroller.svelte";
  import ContextScroller from "../components/ContextScroller.svelte";
  
  let count = 0;
  let index = 0;
  let offset = 0;
  let progress = 0;
  
</script>

<head>
  <link rel="stylesheet" href="./src/style/styles.css" />
</head>

<main>
  <video autoplay muted loop id="myVideo">
    <source src="./src/assets/videos/background.mp4" type="video/mp4">
  </video>

  <TitleComponent />
  <TimelineScroller {index} {count} {offset} {progress} />
  <ContextScroller {index} {count} {offset} {progress}/>
</main>
