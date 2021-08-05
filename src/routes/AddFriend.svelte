<script>
    // https://t.ly/zJuV
    // PlayFab Rest API Add Friend

    import { preferences } from '$lib/localStore'
    
    let results;
    let visibleError;
    let visibleSuccess;

    let friendToAdd = 'tim';
    
    function addFriend () {
            PlayFab.settings.titleId = $preferences.TitleId

            let customRequest = {headers: { 'X-Authentication' : $preferences.SessionTicket }};
            customRequest.FriendUsername = friendToAdd
            

            PlayFabClientSDK.AddFriend(customRequest, (res, err) => {
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
    <h1>Add Friend</h1>
    <p>Adds the PlayFab user, based upon a match against a supplied unique identifier, to the friend list of the local user. At least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.</p>
    <input type="text" bind:value="{friendToAdd}">
    <button on:click="{addFriend}">Add Friend</button>




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