<script>
    // Not working // WIP 

    // https://t.ly/MMD0
    // PlayFab Rest API Add Generic ID

    // I don't think I actually know what a GenericID is.
    // Ooooooh this must be some way to take a visitor account
    // and turn it into a real account. 

    // K in that case - SKIP! :D

    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let newId = '';
    
    function changeID () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};
            customRequest.GenericID = newId

            PlayFabClientSDK.AddGenericID(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data
 
                        console.log(results)
                    }
                })
        }

</script>

<div>
    <h2>not working! WIP</h2>
    <h1>Add Generic ID</h1>
    <p>Generic service identifier to add to the player account.</p>
    <textarea bind:value="{newId}" name="" id="" cols="10" rows="1"></textarea>
    <button on:click="{changeID}">Change ID</button>


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