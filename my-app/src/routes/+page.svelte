<script>

  import TitleComponent from "../components/TitleComponent.svelte";
  import TimelineScroller from "../components/TimelineScroller.svelte";
  
  let count = 6;
  let index = 0;
  let offset = 0;
  let progress = 0;
  
</script>

<head>
  <link rel="stylesheet" href="./src/style/styles.css" />
</head>

<main>
  <TitleComponent />
  <TimelineScroller {index} {count} {offset} {progress} />
</main>
