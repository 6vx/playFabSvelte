<script lang="typescript">
    import '$lib/styles.css';
    import {preferences} from '$lib/localStore'
</script>

<svelte:head>
    <title>PlayFab + Svelte</title>
</svelte:head>

<h1>PlayFab + Svelte</h1>
<p> <a href="/">Home</a> - 
    <a target="_blank" href="https://kitebot.ca">Kitebot</a> - 
    <a target="_blank" href="https://kit.svelte.dev/docs">SvelteKit</a> - 
    <a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/playfab/client/?view=playfab-rest">PlayFab</a> - 
    <a target="_blank" href="https://github.com/6vx/playFabSvelte">Github</a>
</p>

<slot>

</slot>

<style>
    p {
        text-align: center;
    }
</style>