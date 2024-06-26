<script>
    import DriverCard from "./DriverCard.svelte";
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
        <div class="column card-container">
            {#if driver === 1}
            <DriverCard 
                name="Lewis" 
                surname="Hamilton" 
                points={4026} 
                nat="UK" 
                color="#27f4d2" 
            />
            {/if}
            {#if driver === 0}
            <img class ="image" src = "/src/assets/images/ferrari-logo.png" alt ="ferrari logo">
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

    .image {
        width: 40vw;
    }

    .chart-container {
        width: 40vw;
        height: 70vh;
        padding-left: 10vw;
    }

    .card-container {
        width: 20vw;
        padding-right: 15vw;
        padding-bottom: 10vh;
    }

    .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
</style>
