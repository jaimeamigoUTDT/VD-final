<script>
    import { scale } from 'svelte/transition';

    import Lewis from "$lib/assets/images/Lewis.avif";
    import Michael from "$lib/assets/images/Michael.avif";
    import Sebastian from "$lib/assets/images/Sebastian.avif";
    import Alain from "$lib/assets/images/Alain.avif";
    import Max from "$lib/assets/images/Max.avif";
    import Ayrton from "$lib/assets/images/Ayrton.avif";
    import Bertrand from "$lib/assets/images/Bertrand.avif";
    import Arturo from "$lib/assets/images/Arturo.avif";
    import Fernando from "$lib/assets/images/Fernando.avif";

    import UK from "$lib/assets/images/UK.avif";
    import GER from "$lib/assets/images/GER.avif";
    import FRA from "$lib/assets/images/FRA.avif";
    import HOL from "$lib/assets/images/HOL.avif";
    import BRA from "$lib/assets/images/BRA.avif";
    import LUX from "$lib/assets/images/LUX.avif";
    import ITA from "$lib/assets/images/ITA.avif";
    import ESP from "$lib/assets/images/ESP.avif";

    export let name;
    export let surname;
    export let points;
    export let color;

    let names = {
        "Lewis": Lewis,
        "Michael": Michael,
        "Sebastian": Sebastian,
        "Alain": Alain,
        "Max": Max,
        "Ayrton": Ayrton,
        "Bertrand": Bertrand,
        "Arturo": Arturo,
        "Fernando": Fernando
    }

    let nationalities = {
        "Lewis": UK,
        "Michael": GER,
        "Sebastian": GER,
        "Alain": FRA,
        "Max": HOL,
        "Ayrton": BRA,
        "Bertrand": LUX,
        "Arturo": ITA,
        "Fernando": ESP
    }


    $: escala = 1;
</script>

<main style="scale: {escala}">
    <div class="column main-container">
        <div class="row image-container">
            <h1 class="points">{points} pts.</h1>
            <img class="image" src={names[name]} alt="placeholder">
        </div>
    </div>
    <div class="name-container" style="border-top: 7px solid {color};">
        <div class="row">
            <h2 class="name">{name}</h2>
            <img class="flag" src={nationalities[name]} alt="placeholder">
        </div>
        <h1 class="surname">{surname}</h1>
    </div>
</main>

<style>
    .flag {
        width: auto;
        height: 2.5vh;
        margin-top: 5px;
        padding: 5px;
    }
    .name {
        font-family: 'Formula 1';
        font-weight: 300;
        font-size: 1em;
        color: #FFFFFF;
        padding-left: 10px;
    }
    .surname {
        font-family: 'Formula 1';
        font-size: 2em;
        color: #FFFFFF;
        margin-block: 0em;
        padding-left: 10px;
    }
    .name-container {
        background-color: #38383F;
        width: 95%;
        height: 15vh;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .points {
        font-size: 1.5vw;
        color: #38383F;
        font-family: 'Formula 1';
        padding-left: 20px;
    }
    .image-container {
        position: relative;
        width: 100%;
        height: 10vh;
        overflow: visible;
    }
    .image {
        position: relative;
        width: 18vw;
        height: auto;
        z-index: 10;
    }
    .main-container {
        background-color: #f3f3f3;
        width: 25vw;
        height: 25vh;
        overflow: visible;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
