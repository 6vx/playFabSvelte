<script>
    // https://t.ly/eXxJ
    // PlayFab Rest API Add Generic ID

    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let accountInfo = {Username:"",Created:""};
    
    function getAccountInfo () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};
            

            PlayFabClientSDK.GetAccountInfo(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data
                        accountInfo.Username = res.data.AccountInfo.Username
                        accountInfo.Created = res.data.AccountInfo.Created
 
                        console.log(results)
                    }
                })
        }
</script>

<div>
    <h1>Get Account Info</h1>
    <p>Retrieves the user's PlayFab account details.</p>
    <button on:click="{getAccountInfo}">Get Account Info</button>

    {#if visibleSuccess}
        Username: {accountInfo.Username} - Created: {accountInfo.Created}
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