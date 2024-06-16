<script>
    import Scroller from "@sveltejs/svelte-scroller";
    import DebugScroller from "./DebugScroller.svelte";

    export let textName;
    
    let TextComponent;

    async function loadTextComponent() {
        const module = await import(`./textos/${textName}.svelte`);
        TextComponent = module.default;
    }

    loadTextComponent();

    export let top = 0;
    export let threshold = 0.5;
    export let bottom = 1;
    export let count;
    export let index;
    export let offset;
    export let progress;
</script>

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
            <svelte:component this={TextComponent} actual_index={index} />
        </div>
        <div slot="foreground">
            <section class="section"></section>
            <section class="section"></section>
            <section class="section"></section>
        </div>
    </Scroller>
    {#if progress < 1 && progress > 0}
        <DebugScroller {index} {count} {offset} {progress} />
    {/if}
</main>
