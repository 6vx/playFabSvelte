<script lang="typescript">
    // https://t.ly/oto4
    // PlayFab Rest API Get Player Statistics

    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let statistics = [];
    
    function getPlayerStatistics () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};

            PlayFabClientSDK.GetPlayerStatistics(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data
                        res.data.Statistics.forEach(element => {
                            statistics.push(element)
                            console.log(element)
                            statistics = statistics
                        });
                        
                    }
                })
        }

</script>

<div>
    <h1>Get Player Statistics</h1>
    <p>Retrieves the indicated statistics (current version and values for all statistics, if none are specified), for the local player.</p>
    <button on:click="{getPlayerStatistics}">Get Player Statistics</button>

    {#if statistics}
        {#each statistics as statistic}
            <p>Stat: {statistic.StatisticName} Value: {statistic.Value}</p>
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