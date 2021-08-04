<script>
    // https://t.ly/6uWl
    // PlayFab Rest API Get User Inventory

    
    
    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let wallet;
    let currencies = ['DM','GO','JU','SI','TI']
    
    function getUserInventory () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};

            PlayFabClientSDK.GetUserInventory(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data.Inventory
                        wallet = res.data.VirtualCurrency
                        console.log(results)
                    }
                })
        }

</script>

<div>
    <h1>Get User Inventory</h1>
    <p>Requests and displays User Inventory.</p>
    <button on:click="{getUserInventory}">Request Inventory</button>

    {#if results}
        <p>Inventory:</p>
        {#each results as result}
            <p>{result.DisplayName} - {result.Description}</p>
        {/each} 
        <p>Wallet:</p>
        {#each currencies as currency}
            <li>{currency}: {wallet[currency]}</li>            
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