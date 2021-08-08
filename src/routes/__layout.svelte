<script lang="typescript">
    import '$lib/styles.css';
    import TinyTile from '$lib/components/TinyTile.svelte'
    import {preferences} from '$lib/localStore'
</script>

<svelte:head>
    <title>PlayFab + Svelte</title>
</svelte:head>

<h1>PlayFab + Svelte</h1>
<p> 
    <a target="_blank" href="https://kitebot.ca">Kitebot</a>|<a target="_blank" href="https://github.com/6vx/playFabSvelte">Github</a> - 
    <a target="_blank" href="https://svelte.dev/docs">Svelte</a>|<a target="_blank" href="https://kit.svelte.dev/docs">Kit</a> - 
    <a target="_blank" href="https://developer.playfab.com/en-US/my-games">Play</a>|<a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/playfab/client/?view=playfab-rest">Fab</a>
</p>
<p>
    <a href="/">Home</a>
</p>

<slot>

</slot>
<!-- <div class="tiles">
    <TinyTile />
</div> -->

<style>
    p {
        text-align: center;
    }
</style>