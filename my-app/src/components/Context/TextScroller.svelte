<script>
    import { fade, scale } from 'svelte/transition';

    import first_GP from "$lib/assets/images/f1-1950.png";
    import f1_trophy from "$lib/assets/images/f1-trophy.png";
    import max_verstappen from "$lib/assets/images/max-verstappen.png";
    import ferrari from "$lib/assets/images/ferrari.png";

    export let actual_index;
    
    let currentTitle = '';
    let currentBody = '';

    /* Images */
    let images = {
        0: first_GP,
        1: f1_trophy,
        2: max_verstappen,
        3: ferrari,
    };

    /* Titles */
    let titles = {
        0: "Han pasado 74 años...",
        1: "Competencia al 200%",
        2: "Corredores",
        3: "Escuderías",
    };

    /* Textos */
    let textos = {
        0: "La formula 1 moderna comenzó en el año 1950, con el Gran Premio (GP) de Gran Bretaña, en el circuito de Silverstone. Desde entonces, la categoría ha evolucionado mucho, tanto en lo deportivo como en lo tecnológico.",
        1: "La competencia en la Fórmula 1 se divide en campeonatos que duran 10 meses. En cada campeonato varían las fechas, países y circuitos donde se realizan carreras.",
        2: "Cada campeonato está dividido en dos, el campeonato de pilotos y el campeonato de constructores. El campeonato de pilotos se otorga al piloto que acumula más puntos en las carreras.",
        3: "Por otro lado, el campeonato de constructores se otorga a la escudería que acumula más puntos en las carreras (la suma de los puntos de sus dos pilotos).",
    };

    function typeText(text, callback) {
        let i = 0;
        let interval = setInterval(() => {
            if (i < text.length) {
                callback(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 25); // Adjust typing speed here
    }

    $: {
        typeText(titles[actual_index], (typedText) => currentTitle = typedText);
        typeText(textos[actual_index], (typedText) => currentBody = typedText);
    }

</script>

<main>
    <div class="main-container">
        <div class="image-container">
            {#each Object.keys(images) as index}
                {#if actual_index == index}
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img
                        class="image-{index}"
                        src="{images[index]}"
                        alt="placeholder image"
                        transition:scale={{ duration: 500, start: 0.5, end: 1 }}
                    />
                {/if}
            {/each}
        </div>
        <div class="text-container">
            <div class="title" transition:fade={{ duration: 500 }}>
                {currentTitle}
            </div>
            <div class="body" transition:fade={{ duration: 500 }}>
                {currentBody}
            </div>
        </div>
    </div>
</main>

<style>
    .main-container {
        display: flex;
        height: 100vh;
        width: auto;
        flex-direction: row;
        justify-content: space-between;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
        height: 100vh;
        position: relative;
    }
    
    img {
        position: absolute;
    }

    .image-0 {
        filter: drop-shadow(2px 2px 10px black);
        margin-left: 10vw;
        height: auto;
        width: 30vw;
    }

    .image-1 {
        width: 40vw;
        height: auto;
        filter: drop-shadow(2px 2px 10px black);
        margin-left: 5vw;
    }
    .image-2 {
        width: auto;
        height: 90vh;
        filter: drop-shadow(2px 2px 10px black);
        margin-left: 5vw;
    }
    .image-3 {
        width: 40vw;
        height: auto;
        filter: drop-shadow(2px 2px 10px black);
    }
    .image-4 {
        width: 40vw;
        height: auto;
        filter: drop-shadow(2px 2px 10px black);
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50vw;
        height: 100vh;
        margin-left: 5vw;
    }

    .title {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 1em;
        font-family: "Formula 1";
        color: #f3f3f3;
        width: 40vw;
    }

    .body {
        font-size: 1.5em;
        color: #f3f3f3;
        text-align: justify;
        font-family: "Titillium Web", "sans-serif";
        font-weight: 400;
        line-height: 170%;
        margin-right: 10vw;
        width: 40vw;
    }
</style>
