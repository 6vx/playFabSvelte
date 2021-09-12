<script lang="typescript">
    // https://svelte.dev/tutorial/group-inputs
    // Using group inputs in Svelte

    // https://t.ly/aYBP
    // PlayFab REST Api Get Catalog Items
    
    import { preferences } from '$lib/localStore'
    let results;
    let CatalogVersion = null
    let visibleError;
    let visibleSuccess;
    let catalogVersionSelector = [null, "antiques", "skills"]
    
    function handleCatalogRequest () {
            
        let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};
            customRequest.CatalogVersion = CatalogVersion
        
        PlayFabClientSDK.GetCatalogItems(customRequest, (res, err) => {
            if (err) {
                console.log(err)
                visibleError = err.error
            } else {
                visibleSuccess = res.status
                results = res.data.Catalog
                console.log(res.data.Catalog)
            }
        })
    }

</script>

<div>
    <h1>Get Catalog Items</h1>
    <p>Requests and displays items from the selected catalog. If no catalog is selected (null), default catalog is returned.</p>
    
    {#each catalogVersionSelector as catalog}
        <label>
        <input type="radio" bind:group={CatalogVersion} name="catalog" value="{catalog}">
        {catalog}
        </label>
        <br>
        <br>
    {/each}
    
    <button on:click="{handleCatalogRequest}">Request Catalog</button>

    {#if results}
        {#each results as result}
             <p>{result.DisplayName} - {result.Description}</p>
        {/each}   
    {/if}


    <div class="success">
        {#if visibleSuccess}
             <h1>{visibleSuccess}</h1>
        {/if}
    </div>
    <div class="error">
        {#if visibleError}
             <h1>{visibleError}</h1>
        {/if}
    </div>
</div>