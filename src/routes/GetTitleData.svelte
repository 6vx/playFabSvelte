<script lang="ts">
    // https://t.ly/lfaX
    // PlayFab Rest API Get Title Data

    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let titleData;
    let titleDataKeys;
    
    function getTitleData () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = { headers: { 'X-Authentication' : $preferences.SessionTicket }};

            PlayFabClientSDK.GetTitleData(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data
                        titleData = res.data.Data
                        titleDataKeys = Object.keys(res.data.Data)
                    }
                })
        }
</script>

<div>
    <h1>Get Title Data</h1>
    <p>Retrieves the key-value store of custom title settings</p>
    <button on:click="{getTitleData}">Get Title Data</button><br><br>

    {#if titleData}
        <h3>titleData:</h3>
        {#each titleDataKeys as key}
            <p>{key} - {titleData[key]}</p>
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