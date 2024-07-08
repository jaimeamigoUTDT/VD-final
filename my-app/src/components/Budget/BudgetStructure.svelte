<script>
    import BudgetLayerCake from "./BudgetLayerCake.svelte";
    import BudgetText from "./BudgetText.svelte";

    export let actual_index;

    let years = {
        1: "2013",
        2: "2014",
        3: "2015",
        4: "2016",
        5: "2017",
        6: "2018",
        7: "2019",
        8: "2020",
        9: "2021",
        10: "2022",
        11: "2023",
    }
</script>

<main class = "section">
    {#if actual_index !== 0}
    <fieldset class = "container">
        <legend>{years[actual_index]}</legend>
        <div class="row">
            <div class="element">
                <BudgetLayerCake selectedYear = {years[actual_index]}/>
            </div>
            <div class = "text-container">
                <BudgetText actual_index = {actual_index}/>
            </div>
        </div>
        
    </fieldset>
    {/if}
</main>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        border-radius: 15px;
        border-color: #FA0000;
        border-width: 3px;
        margin-top:2vh;
        margin-bottom: 2vh;
        margin-left: 2vw;
        margin-right: 2vw;
    }

    legend {
        font-size: 2em;
        font-family: 'Formula 1';
        font-weight: bold;
        color: #f3f3f3;
        padding: 10px;
    }
    .row {
    display: flex;
    justify-content: center;
}
    .element {
        width: auto;
    }
    .text-container {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>