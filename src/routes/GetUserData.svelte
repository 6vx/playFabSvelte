<script>
    // https://t.ly/I6sC
    // PlayFab Rest API Get User Data

    import { preferences } from '$lib/localStore'
    let results = {}
    let displayValues = ["joined","highScore","clan","xp", "level","wins"]
    let visibleError;
    let visibleSuccess;

    let httpHeaders = { 'X-Authentication' : $preferences.SessionTicket };
    let myHeaders = new Headers(httpHeaders);
    
    function handleUserDataRequest () {
            PlayFab.settings.titleId = $preferences.TitleId
            let customUserDataRequest = {};
                    customUserDataRequest.headers = myHeaders
                    // Using a different players PlayFabId can load their User Data to read only. 
                    customUserDataRequest.PlayFabId = $preferences.PlayFabId
                    // And you can request specific key value pairs using 'Keys'
                    // customUserDataRequest.Keys = ["string", "array"]

            PlayFabClientSDK.GetUserData(customUserDataRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data
                        
                    }
                })
        }

</script>

<div>
    <h1>Get User Data</h1>
    <p>Retrieves the title-specific custom data for the user which is readable and writable by the client.</p>
    <button on:click="{handleUserDataRequest}">Request User Data</button>

    {#if visibleSuccess}
        {#each displayValues as value}
            <p>{value} : {results.Data[value].Value}</p>
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