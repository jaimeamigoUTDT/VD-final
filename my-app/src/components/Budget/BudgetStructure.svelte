<script>
    import BudgetLayerCake from "./BudgetLayerCake.svelte";
    import BudgetText from "./BudgetText.svelte";

    export let actual_index;

    let years = {
        0: "2013",
        1: "2014",
        2: "2015",
        3: "2016",
        4: "2017",
        5: "2018",
        6: "2019",
        7: "2020",
        8: "2021",
        9: "2022",
        10: "2023",
    }
</script>

<main class = "section">
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
</main>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        border-radius: 15px;
        border-color: #FA0000;
        border-width: 10px;
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