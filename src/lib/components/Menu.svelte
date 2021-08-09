<script>
    let title = "PlayFab + Svelte"
    
    let links = [
        {
            address : "https://kitebot.ca",
            name : "Kitebot",
        },
        {
            address : "https://github.com/6vx/playFabSvelte",
            name : "GitRepo",
        },
        {
            address : "https://svelte.dev/docs",
            name : "SvelteDocs",
        },
        {
            address : "https://kit.svelte.dev/docs",
            name : "KitDocs",
        },
        {
            address : "https://developer.playfab.com/en-US/my-games",
            name : "FabPortal",
        },
        
        {
            address : "https://docs.microsoft.com/en-us/rest/api/playfab/client/?view=playfab-rest",
            name : "FabDocs",
        },
    ]
</script>

<div>
    <h1>{title}</h1>
    <div class="flex-r">
        {#each links as link}
            <div class="flex-auto">
                <a href="{link.address}" target="_blank">{link.name}</a>
            </div>
        {/each}
    </div>
    <br>   
</div>

<style>
    .flex-r {
        font-size: small;
    }
</style>