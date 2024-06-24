<script>
    import Velocimeter from "./Velocimeter.svelte";
    import { fade, scale } from 'svelte/transition';
    import velocidades from "/src/data/topSpeeds.csv";

    export let actual_index;

    function getSpeed(year) {
        return velocidades.find((v) => v.year === year)?.speed || 50;
    }

    let textos = {
        0: "Un auto rápido es un auto ganador. Por esta razón, los fabricantes buscan constantemente nuevas formas de mejorar la velocidad de sus autos, realizando pequeños ajustes que prometen aumentarla. Los ajustes pueden ocurrir de carrera en carrera durante una temporada, o de temporada en temporada. Pero hubo ciertos cambios que revolucionaron la formula 1.",
        1: "A fines de los 70s y principio de los 80s, llegaron a la formula 1 los motores turboalimentados. Estos motores podían producir más de 1,000 caballos de fuerza en contraste a los 285 a 500 caballos de fuerza que producían los motores en décadas anteriores.",
        2: "En 1982 se introdujo el primer auto con efecto suelo, el Lotus 78. Diseñoado por Chapman y su equipo utilizando un concepto inverso al que se usaba en los aviones de combate, este auto generaba una fuerza descendente que lo mantenía pegado al suelo. Generando así mayor agarre y velocidad en las curvas.",
        3: "En 1992 y 1993 el equipo Williams dominó la formula 1 con un sistema de suspensión activa. Este sistema permitía que el auto se mantuviera a una altura constante del suelo, independientemente de las condiciones de la pista. Sin embargo, este sistema fue prohibido en 1994 por la FIA.",
        4: "En 2011 se introdujo el sistema DRS (Drag Reduction System) en la formula 1. Este sistema permite a los pilotos abrir una compuerta en el alerón trasero del auto, reduciendo la resistencia al aire y aumentando la velocidad máxima del auto.",
        5: "En 2014 se introdujeron los motores híbridos a la formula 1. Estos motores utilizan un sistema de recuperación de energía cinética (ERS) que permite a los autos recargar sus baterías durante las frenadas y utilizar esa energía para aumentar la potencia del motor en las rectas.",
    };

    let images = {
        0: "renault-gordini.png",
        1: "renault-gordini.png",
        2: "ground-effect.png",
        3: "active-suspension.png",
        4: "DRS.png",
        5: "formula-1-hybrid-system.jpg",
    };

    let years = {
        0: 0,
        1: 1979,
        2: 1985,
        3: 1990,
        4: 2011,
        5: 2022,
    };

    let titles = {
        0: "El correcaminos de los deportes",
    };

    $: actual_speed = getSpeed(years[actual_index]);
</script>

<main>
    <div class="column-container height-80">
        {#if actual_index !== 0}
        <div class="text-container">
            <p class="text">{textos[actual_index]}</p>
        </div>
        <div id="assets" class="row-container">
            <div id="velocimeter" class="velocimeter">
                <Velocimeter {actual_speed} />
            </div>
            <div id="context" class="context">
                {#each Object.keys(images) as index}
                {#if actual_index == index}
                    <img
                        class="image-{actual_index}"
                        src="/src/assets/images/{images[actual_index]}"
                        alt="placeholder"
                    />
                    {/if}
                    {/each}
            </div>
        </div>
        {/if}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100vh;
        width: 100%;
    }

    .column-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10vh;
    }

    .row-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: 80%;
        gap: 5vw;
    }

    .title {
        font-family: "Formula 1";
        font-style: bold;
        font-size: 3.2vw;
        color: #f3f3f3;
        text-align: center;
        margin: 0;
        width: 70vw;
        padding-top:25vh;
    }

    .text-container {
        height: 20vh; /* Fixed height for text container */
        width: 58vw;
        overflow: visible; /* Hide overflow if text exceeds container */
    }

    .text {
        font-size: 1.4vw;
        color: #f3f3f3;
        text-align: justify;
        font-family: "Titillium Web", "sans-serif";
        font-weight: 400;
        line-height: 200%;
        width: 100%;
    }

    #velocimeter {
        width: 50%;
        height: 100%;
    }

    #context {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: visible; /* Ensure the image is within the container */
    }

    .height-80 {
        height: 90vh;
    }

    .image-1 {
        width: 20vw;
        filter: drop-shadow(2px 2px 10px black);
    }

    .image-2 {
        width: 35vw;
        filter: drop-shadow(2px 2px 10px black);
    }

    .image-3 {
        width: 30vw;
        transform: rotate(15deg);
        filter: drop-shadow(2px 2px 10px black);
    }

    .image-4 {
        width: 30vw;
        filter: drop-shadow(2px 2px 10px black);
    }

    .image-5 {
        width: 30vw;
        border-left: 10px;
        border-top: 10px;
        border-bottom: 10px;
        border-right: 0px;
        padding-top: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-style: solid;
        filter: drop-shadow(2px 2px 10px black);
        border-color: #38383F;
    }

</style>
