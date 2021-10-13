<script lang="ts">
    // https://t.ly/KRWz
    // PlayFab Rest API Update Player Statistics

    import { preferences } from '$lib/localStore'
    
    let visibleError;
    let visibleSuccess;

    let luckyNumber:number;
    
    function updatePlayerStatistics () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};
            customRequest.Statistics = [{StatisticName: 'Lucky Number', Value: luckyNumber}]
            

            PlayFabClientSDK.UpdatePlayerStatistics(customRequest, (res, err) => {
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
    <h1>Update Player Statistics</h1>
    <p>Creates and updates the title-specific custom data for the user which is readable and writable by the client.</p>
    Lucky Number:  <input type="text" bind:value="{luckyNumber}">
    <button on:click="{updatePlayerStatistics}">Update Player Statistics</button>

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