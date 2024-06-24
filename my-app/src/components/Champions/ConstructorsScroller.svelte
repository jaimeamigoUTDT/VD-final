<script>
    import Scroller from "@sveltejs/svelte-scroller";
    
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
                
            </div>
      </Scroller>
  </main>
  
  <style></style>