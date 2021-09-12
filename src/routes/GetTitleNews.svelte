<script lang="typescript">
    // https://t.ly/9Y1b
    // PlayFab Rest API Get Title News

    import { preferences } from '$lib/localStore'
    
    let visibleError;
    let visibleSuccess;

    let titleNews;
    
    function getTitleNews () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = { headers: { 'X-Authentication' : $preferences.SessionTicket }};

            PlayFabClientSDK.GetTitleNews(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        titleNews = res.data.News
                    }
                })
        }
</script>

<div>
    <h1>Get Title News</h1>
    <p>Retrieves the title news feed, as configured in the developer portal</p>
    <button on:click="{getTitleNews}">Get Title News</button><br><br>

    {#if titleNews}
        <h3>titleNews:</h3>
        {JSON.stringify(titleNews)}
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