<script>
  import { onMount } from "svelte";
  import TitleComponent from "../components/TitleComponent.svelte";
  import ContextScroller from "../components/Context/ContextScroller.svelte";
  import SpeedScroller from "../components/Speed/SpeedScroller.svelte";
  import BudgetScroller from "../components/Budget/BudgetScroller.svelte";
  import DriversScroller from "../components/Champions/DriversScroller.svelte";
  import ConstructorsScroller from "../components/Champions/ConstructorsScroller.svelte";
  import BudgetLineChart from "../components/Budget/BudgetLineChart.svelte";
  import FooterComponent from "../components/FooterComponent.svelte";

  import ICON from "$lib/assets/images/f1_logo.png";

  import video from "$lib/assets/videos/background.mp4";

  let count = 0;
  let index = 0;
  let offset = 0;
  let progress = 0;

  let yIndex = 0;
  let dashArray = 1310;
  let dashOffset = 0;

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    progress = scrollTop / docHeight;
    yIndex = progress;
    dashArray = index === 5 ? 1310 : 262;
    dashOffset =
      progress > 0 && progress < 1 ? -1310 * (1 - progress) + 262 : 262;
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<head>
  <title>Formula 1</title>
  <link rel="icon" href={ICON} />
</head>


<main>
  {#if yIndex < 0.97 && yIndex > 0.03}
    <svg
      id="fixed-svg"
      class="timeline-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 535 274"
      fill="none"
      style="scale: .25;"
    >
      <path
        d="M211.615 258.978C255.05 258.978 263.418 258.978 306.853 260.174C338.277 261.039 361.492 260.51 392.925 260.971L463.855 258.978C463.855 258.978 521.653 255.532 522.432 227.897C522.671 219.408 521.107 213.182 512.967 210.762H388.542C388.542 210.762 288.536 214.348 282.944 205.98C274.789 193.776 257.704 190.231 245.486 194.823C228.958 201.034 231.982 178.496 217.991 167.725C160.953 123.814 108.408 63.7213 92.8674 34.2336C88.0856 25.1604 86.9175 13.876 71.3493 12.7154C48.9115 11.0426 17.9525 26.264 13.5692 27.858C9.18586 29.452 38.4659 99.8857 41.0644 100.382C43.663 100.878 48.4792 102.032 49.4326 104.765C61.3871 139.035 55.4098 164.139 66.5674 201.995C77.8679 240.336 88.0823 255.878 127.934 258.978C134.45 259.485 156.095 260.392 162.602 259.775C173.649 258.729 192.949 249.615 204.044 249.813C208.753 249.897 206.905 258.978 211.615 258.978Z"
        stroke="#38383F"
        stroke-width="25"
        stroke-linejoin="round"
      />
      <path
        d="M211.615 258.978C255.05 258.978 263.418 258.978 306.853 260.174C338.277 261.039 361.492 260.51 392.925 260.971L463.855 258.978C463.855 258.978 521.653 255.532 522.432 227.897C522.671 219.408 521.107 213.182 512.967 210.762H388.542C388.542 210.762 288.536 214.348 282.944 205.98C274.789 193.776 257.704 190.231 245.486 194.823C228.958 201.034 231.982 178.496 217.991 167.725C160.953 123.814 108.408 63.7213 92.8674 34.2336C88.0856 25.1604 86.9175 13.876 71.3493 12.7154C48.9115 11.0426 17.9525 26.264 13.5692 27.858C9.18586 29.452 38.4659 99.8857 41.0644 100.382C43.663 100.878 48.4792 102.032 49.4326 104.765C61.3871 139.035 55.4098 164.139 66.5674 201.995C77.8679 240.336 88.0823 255.878 127.934 258.978C134.45 259.485 156.095 260.392 162.602 259.775C173.649 258.729 192.949 249.615 204.044 249.813C208.753 249.897 206.905 258.978 211.615 258.978Z"
        stroke="#FA0000"
        stroke-width="17"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-dasharray="{dashArray} {1310 - dashArray}"
        stroke-dashoffset={dashOffset}
      />
    </svg>
  {/if}

  <video autoplay muted loop id="myVideo">
    <source src={video} type="video/mp4" />
  </video>

  <TitleComponent />
  <ContextScroller {index} {count} {offset} {progress} />
  <SpeedScroller {index} {count} {offset} {progress} />
  <BudgetScroller {index} {count} {offset} {progress} />
  <div class="section line-chart">
    <BudgetLineChart />
  </div>
  <DriversScroller {index} {count} {offset} {progress} />
  <ConstructorsScroller {index} {count} {offset} {progress} />
  <div class="section">
    <FooterComponent />
  </div>
</main>

<style>
  @import "$lib/style/styles.css";

  #fixed-svg {
    position: fixed;
    z-index: 1000; /* Ensure it is above all other elements */
    bottom: -60px;
    left: -150px;
  }
</style>
