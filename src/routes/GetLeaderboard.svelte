<script lang="typescript">
    // https://t.ly/psb3
    // PlayFab Rest API Get Leaderboard

    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let leaderboard;
    
    function getLeaderboard () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = { headers: { 'X-Authentication' : $preferences.SessionTicket }};
            customRequest.StartPosition = 0
            customRequest.StatisticName = 'highScore'

            PlayFabClientSDK.GetLeaderboard(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data
                        leaderboard = res.data.Leaderboard
                    }
                })
        }

</script>

<div>
    <h1>Get Leaderboard</h1>
    <p>Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard</p>
    <p>(For demonstration purposes one player is awarded 2pts on the 15'th minute of every hour. 0-15 = leaderboard should be empty. 16-59 = leaderboard should have a player on it.)</p>
    <button on:click="{getLeaderboard}">Get Leaderboard</button><br><br>

    {#if leaderboard}
        <h3>leaderboard</h3>
        {#each leaderboard as entry}
           <p>#{entry.Position + 1}: {entry.PlayFabId} - {entry.StatValue}pts</p>
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