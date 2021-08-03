<script lang="typescript">
    import { preferences } from '$lib/localStore'
    let usernameHolder = ""
    let passwordHolder = ""
    let results = {}
    let visibleError;
    let visibleSuccess;
    

    function login () {
        PlayFab.settings.titleId = $preferences.TitleId
        console.log("Attempting login.")
        // Verbose intentionally. 
        let customLoginRequest = {"TitleId": "", "Username": "","Password":""};
            customLoginRequest.TitleId = $preferences.TitleId
            customLoginRequest.Username = usernameHolder
            customLoginRequest.Password = passwordHolder
            // caching these values so that we can  
            $preferences.Password = passwordHolder
            $preferences.Username = usernameHolder

        
        PlayFabClientSDK.LoginWithPlayFab(customLoginRequest, (res, err) => {
            if (err) {
                console.log(err)
                visibleError = err.error
            } else {
                visibleSuccess = res.status
                results = res.data
                $preferences.SessionTicket = results.SessionTicket
                $preferences.PlayFabId = results.PlayFabId
                console.log($preferences.SessionTicket)
                console.log(res)
            }
        })   
    }

</script>

<div>

    <p>this component takes your username and password, saves them to local storage and tries to login with playfab.</p>
    <p>if successful, the session ticket response will be saved to local storage and used for calls in other components.</p>

    <div class="flex">
        
        <div class="flex-auto">
            <label for="usernameInput">username</label>
            <input 
            size="10"
            bind:value="{usernameHolder}"
            name="usernameInput" class="" type="text">
        </div>

        <div class="flex-auto">
            <label for="passwordInput">password</label>
            <input 
            size="10"
            bind:value="{passwordHolder}"
            name="passwordInput" class="" type="password">
        </div>

        <div class="flex-auto">
            <button class=""
            on:click="{login}">
                login
            </button>
        </div>

    </div>

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