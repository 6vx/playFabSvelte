<script>
    // https://t.ly/sk7T
    // PlayFab Rest API Get Friends List

    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let friendslist;
    
    function getFriends () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};
            

            PlayFabClientSDK.GetFriendsList(customRequest, (res, err) => {
                    if (err) {
                        console.log(err)
                        visibleError = err.error
                    } else {
                        visibleSuccess = res.status
                        console.log(res.data)
                        results = res.data
                        friendslist = res.data.Friends
                    }
                })
        }
</script>

<div>
    <h1>Get Friends List</h1>
    <p>Retrieves the current friend list for the local user, constrained to users who have PlayFab accounts.</p>
    <button on:click="{getFriends}">Get Friends List</button>

    {#if visibleSuccess}
        You have {friendslist.length} friends
        {#each friendslist as friend}
            <p>{JSON.stringify(friend)}</p>
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