<script lang="typescript">
    import {preferences} from '$lib/localStore'
    import '$lib/styles.css';

    
</script>

<svelte:head>
    <title>playFabSvelte</title>
</svelte:head>

<h1>PlayFab+Svelte</h1>
<p> <a href="https://kitebot.ca">Kitebot</a> - 
    <a href="https://kit.svelte.dev/docs">SvelteKit Docs</a> - 
    <a href="https://docs.microsoft.com/en-us/gaming/playfab/">PlayFab Docs</a> - 
    <a href="https://github.com/6vx/playFabSvelte">Github Repo</a>
    


</p>

<slot>

</slot>

<style>
    p {
        text-align: center;
    }

</style>