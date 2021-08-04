<script>
    import { preferences } from '$lib/localStore'
    let results = {}
    let joinedDate;
    let visibleError;
    let visibleSuccess;

    let httpHeaders = { 'X-Authentication' : $preferences.SessionTicket };
    let myHeaders = new Headers(httpHeaders);
    
    function handleUserDataRequest () {
            PlayFab.settings.titleId = $preferences.TitleId
            let customUserDataRequest = {};
                    customUserDataRequest.TitleId = $preferences.TitleId
                    customUserDataRequest.headers = myHeaders
                    customUserDataRequest.PlayFabId = $preferences.PlayFabId

            PlayFabClientSDK.GetUserData(customUserDataRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        results = res.data.Data
                        console.log(JSON.stringify(res.data.Data.joined.Value))
                        $preferences.Joined = (res.data.Data.joined.Value)
                    }
                })
        }

</script>

<div>
    <h1>Get User Data</h1>
    <p>Requests and displays UserData.</p>
    <button on:click="{handleUserDataRequest}">Request Data</button>

    <div class="success">
        {#if visibleSuccess}
        User Joined: {$preferences.Joined}
             <h1>{visibleSuccess}</h1>
        {/if}
    </div>
    <div class="error">
        {#if visibleError}
             <h1>{visibleError}</h1>
        {/if}
    </div>
</div>