<script>

  import TitleComponent from "../components/TitleComponent.svelte";
  import ContextScroller from "../components/Context/ContextScroller.svelte";
  import SpeedScroller from "../components/Speed/SpeedScroller.svelte";
  import BudgetScroller from "../components/Budget/BudgetScroller.svelte";
  import DriversScroller from "../components/Champions/DriversScroller.svelte";
  import ConstructorsScroller from "../components/Champions/ConstructorsScroller.svelte";
  import BudgetLineChart from "../components/Budget/BudgetLineChart.svelte";
  
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
  <ContextScroller {index} {count} {offset} {progress}/>
  <SpeedScroller {index} {count} {offset} {progress}/>
  <BudgetScroller {index} {count} {offset} {progress}/>
  <div class ="section line-chart">
    <BudgetLineChart />
  </div>
  <DriversScroller {index} {count} {offset} {progress}/>
  <ConstructorsScroller {index} {count} {offset} {progress}/>
</main>