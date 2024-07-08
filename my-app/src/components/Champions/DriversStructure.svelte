<script>
    import DriversRaceChart from "./DriversRaceChart.svelte";
    import ConstructorsChart from "./ConstructorsChart.svelte";

    export let driver = 1;
</script>

<main>
    <div class="row">
        <div class="chart-container">
            {#if driver === 1}
            <DriversRaceChart />
            {/if}
            {#if driver === 0}
            <ConstructorsChart />
            {/if}
        </div>
        
    </div>
</main>

<style>

    main {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
    }

    .chart-container {
        width: 100vw;
        height: 70vh;
        display: flex;
        justify-content: center;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
