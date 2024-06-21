<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import BudgetLayerCake from "./BudgetLayerCake.svelte";
  import BudgetStructure from "./BudgetStructure.svelte";
  
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
        bind:progress>
        <div slot="background" class="section">
            
          </div>
          <div slot="foreground">
            <section class="section">
                <BudgetStructure/>
            </section>
            <section class="section"></section>
            <section class="section"></section>
            <section class="section"></section>
            <section class="section"></section>
            <section class="section"></section>
          </div>
    </Scroller>
</main>

<style>
    
  </style>