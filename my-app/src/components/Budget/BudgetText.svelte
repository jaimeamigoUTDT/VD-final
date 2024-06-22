<script>
    export let actual_index;

    let texts = {
        0: "Los presupuestos de la formula 1 en los ultimos 10 años se comportaron de manera distinta a lo que solía ser en los años anteriores.",
        1: "A principios de la última década, los equipos grandes dominaban la competencia con prespuestos hasta casi 5 veces más grandes que los equipos más pequeños.",
        2: "En 2015 Mercedes ya estaba en su época dorada y equipos como Manor o Sauber, no podían competir contra un presupesto tan por encima del suyo.",
        3: "Si bien la situación se alivianó muy poco en los años siguientes, desde 2016 hasta 2020, en 2021 la FIA decidió tomar una decisión al respecto.",
        4: "Si bien la situación se alivianó muy poco en los años siguientes, desde 2016 hasta 2020, en 2021 la FIA decidió tomar una decisión al respecto.",
        5: "Si bien la situación se alivianó muy poco en los años siguientes, desde 2016 hasta 2020, en 2021 la FIA decidió tomar una decisión al respecto.",
        6: "Si bien la situación se alivianó muy poco en los años siguientes, desde 2016 hasta 2020, en 2021 la FIA decidió tomar una decisión al respecto.",
        7: "Si bien la situación se alivianó muy poco en los años siguientes, desde 2016 hasta 2020, en 2021 la FIA decidió tomar una decisión al respecto.",
        8: "Es por eso, que en 2021 la FIA decidió todos los equipos no podían gastar más de 145 millones de dólares en sus presupuestos anuales.",
        9: "Esta decisión fue tomada para que los equipos más pequeños pudieran competir de manera más justa y para que la competencia no se volviera tan desigual. Buscando que compitan en lo técnico y estratégico.",
        10: "A pesar de esto, los equipos grandes siguen teniendo ventaja en la competencia, pero la diferencia entre ellos y los equipos más pequeños es mucho menor.",
    }
</script>

<main>
    <p class ="text">
        {texts[actual_index]}
    </p>
</main>

<style>

        main {
            display: flex;
            justify-content: center;
            align-items: center;
        }

       .text {
        font-size: 1.6vw;
        color: #f3f3f3;
        text-align: justify;
        font-family: "Titillium Web", "sans-serif";
        font-weight: 400;
        line-height: 200%;
        width: 100%;
    }

</style>