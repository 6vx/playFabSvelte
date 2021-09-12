<script lang="typescript">
    // https://t.ly/hhnf
    // PlayFab Rest API Get Time

    import { preferences } from '$lib/localStore'

    let time;

    let visibleError;
    let visibleSuccess;
    
    function getTime () {
            PlayFab.settings.titleId = $preferences.TitleId
            let customRequest = { headers: { 'X-Authentication' : $preferences.SessionTicket }};
            PlayFabClientSDK.GetTime(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        time = res.data.Time
                    }
                })
        }
</script>

<div>
    <h1>Get Time</h1>
    <p>Retrieves the current server time</p>
    <button on:click="{getTime}">Get Time</button><br><br>

    {#if time}
        <h3>time</h3>
        {time}
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