<script>
    import DriverCard from "./DriverCard.svelte";
    import ConstructorsChart from "./ConstructorsChart.svelte";
</script>

<main>
    <div class="row">
        <div class="chart-container">
            <ConstructorsChart />
        </div>
        <div class="column card-container">
            <DriverCard 
                name="Lewis" 
                surname="Hamilton" 
                points={4026} 
                nat="UK" 
                color="#27f4d2" 
            />
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
