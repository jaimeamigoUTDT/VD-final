<script>
    import TimelineScroller from "./TimelineScroller.svelte";

    let count = 0;
    let index = 0;
    let offset = 0;
    let progress = 0;

</script>

<main>
    <TimelineScroller {index} {count} {offset} {progress}/>
</main>

<style>
    main {
        position: absolute;
        top: 0;
        left: 0;
        scale: 1;
    }
</style>