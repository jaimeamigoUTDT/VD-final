<script>
    import FooterCard from "./FooterCard.svelte";
</script>

<main class = "main-container">
    <FooterCard title = {"Créditos"} index = {0} />
    <FooterCard title = {"Fuentes"} index = {1}/>
    <FooterCard title = {"Tecnologías"} index = {2}/>
</main>

<style>
    .main-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-self: center;
        gap: 70px;
        padding-top: 5vh;
        }
</style>