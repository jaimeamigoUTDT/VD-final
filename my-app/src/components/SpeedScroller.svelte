<script>
    import Scroller from "@sveltejs/svelte-scroller";
    import Velocimeter from "./Velocimeter.svelte";
    
    export let top = 0;
    export let threshold = 0.5;
    export let bottom = 1;
    export let count;
    export let index;
    export let offset;
    export let progress;
</script>

<head>
    <link rel="stylesheet" href="./src/style/styles.css" />
</head>

<main>
    <Scroller
        {top}
        {threshold}
        {bottom}
        bind:count
        bind:index
        bind:offset
        bind:progress
    >
        <div slot="background" class="section">
            <h1 class="title padding-50">
                <b>El correcaminos de los deportes</b>
            </h1>
            <div class ="velocimeter">
                <Velocimeter actual_speed = {360}/>
            </div>
        </div>
        <div slot="foreground">
            <section class="section"></section>
            <section class="section"></section>
            </div>
    </Scroller>
</main>

<style>
    .padding-50 {
    padding-top: 50px;
  }
  .title {
    font-family: "Formula 1";
    font-style: bold;
    font-size: 4.25vw;
    color: #f3f3f3;
    text-align: center;
    margin: 0px;
  }

  .velocimeter {
    position: absolute;
    bottom: -20vh;
    left: 60vw;
  }
</style>
