<script>
    export let actual_index;

    let texts = {
        1: "Los presupuestos de la formula 1 en los ultimos 10 años se comportaron de manera distinta a lo que solía ser en los años anteriores.",
        2: "A principios de la última década, los equipos grandes dominaban la competencia con prespuestos hasta casi 5 veces más grandes que los equipos más pequeños.",
        3: "En 2015 Mercedes ya estaba en su época dorada y equipos como Manor o Sauber, no podían competir contra un presupesto tan por encima del suyo.",
        4: "Si bien la situación se alivianó muy poco en los años siguientes, desde 2016 hasta 2020, en 2021 la FIA decidió tomar una decisión al respecto.",
        5: "Si bien la situación se alivianó muy poco en los años siguientes, desde 2016 hasta 2020, en 2021 la FIA decidió tomar una decisión al respecto.",
        6: "Para 2018, McLaren ya había reducido su presupuesto a la mitad, pero los presupuestos de los equipos mas chicos no había aumentado mucho.",
        7: "En 2019 se vió un aumento importante en los presupuestos de los equipos mas chicos, algunos aumentando en hasta 20 millones su prespuesto.",
        8: "2020 se mantuvo de manera similar, modificando un poco los presupuestos de los equipos más chicos (algunos más, otros menos), pero no lo suficiente para competir contra los equipos grandes.",
        9: "Es por eso, que en 2021 la FIA decidió todos los equipos no podían gastar más de 145 millones de dólares en sus presupuestos anuales.",
        10: "Esta decisión fue tomada para que los equipos más pequeños pudieran competir de manera más justa y para que la competencia no se volviera tan desigual. Buscando que compitan en lo técnico y estratégico.",
        11: "A pesar de esto, los equipos grandes siguen teniendo ventaja en la competencia, pero la diferencia entre ellos y los equipos más pequeños es mucho menor.",
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
        font-size: 1.5em;
        color: #f3f3f3;
        text-align: justify;
        font-family: "Titillium Web", "sans-serif";
        font-weight: 400;
        line-height: 200%;
        width: 100%;
    }

</style>