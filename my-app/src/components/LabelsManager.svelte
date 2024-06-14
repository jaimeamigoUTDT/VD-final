<script>
    import Label1 from './labels/Label1.svelte';
    import Label2 from './labels/Label2.svelte';
    import Label3 from './labels/Label3.svelte';
    import Label4 from './labels/Label4.svelte';
	import Label5 from './labels/Label5.svelte';

    export let index;

    $: showLabel1 = (index === 0 || index === 5) ? 'visible' : 'hidden';
    $: showLabel2 = (index === 1 || index === 5) ? 'visible' : 'hidden';
    $: showLabel3 = (index === 2 || index === 5) ? 'visible' : 'hidden';
    $: showLabel4 = (index === 3 || index === 5) ? 'visible' : 'hidden';
    $: showLabel5 = (index === 4 || index === 5) ? 'visible' : 'hidden';

</script>

<head>
    <link rel="stylesheet" href="./src/style/styles.css" />
</head>



<main>

    <Label1 visible = {showLabel1}/>
    <Label2 visible = {showLabel2}/>
    <Label3 visible = {showLabel3}/>
    <Label4 visible = {showLabel4}/>
    <Label5 visible = {showLabel5}/>

</main>

