<script>
    import Scroller from "@sveltejs/svelte-scroller";

    import TextScroller from "./TextScroller.svelte";
    
    export let top = 0;
    export let threshold = 0.5;
    export let bottom = 1;
    export let count;
    export let index;
    export let offset;
    export let progress;

</script>

<head>
    <link rel="stylesheet" href="../src/style/styles.css" />
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
            <TextScroller actual_index = {index}/>
        </div>
        <div slot="foreground">
            <section class="section"></section>
            <section class="section"></section>
            <section class="section"></section>
            <section class="section"></section>
            </div>
    </Scroller>
</main>

<style>
</style>
