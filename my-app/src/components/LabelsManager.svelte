<script>
	import Label4 from './labels/Label4.svelte';
    import Label3 from './labels/Label3.svelte';

    export let index;

    $: showLabel1 = index === 0? 'visible':'hidden';
    $: showLabel2 = index === 1? 'visible':'hidden';
    $: showLabel3 = index === 2? 'visible':'hidden';
    $: showLabel4 = index === 3? 'visible':'hidden';
    $: showLabel5 = index === 4? 'visible':'hidden';

</script>

<head>
    <link rel="stylesheet" href="./src/style/styles.css" />
</head>



<main>
    <Label3 visible = {showLabel3}/>
    <Label4 visible = {showLabel4}/>
</main>

