<script>
    // https://t.ly/hAth
    // PlayFab Rest API Update User Data

    import { preferences } from '$lib/localStore'
    
    let visibleError;
    let visibleSuccess;

    let selectedClan;
    let clans = ['red','green','blue','black','white']
    
    function updateUserData () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};
            customRequest.Data = {clan: selectedClan}
            

            PlayFabClientSDK.UpdateUserData(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                    }
                })
        }
</script>

<div>
    <h1>Update User Data</h1>
    <p>Creates and updates the title-specific custom data for the user which is readable and writable by the client.</p>

    {#each clans as clan}
        <label>
        <input type="radio" bind:group={selectedClan} name="catalog" value="{clan}">
        {clan}
        </label><br><br>
    {/each}

    <button on:click="{updateUserData}">Update User Data</button>

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