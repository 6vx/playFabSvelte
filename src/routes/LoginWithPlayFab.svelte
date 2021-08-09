<script lang="typescript">
    // https://svelte.dev/tutorial/store-bindings
    // How to store values in Svelte

    // https://t.ly/80XR
    // PlayFab REST Api Login With PlayFab

    import { preferences } from '$lib/localStore'

    let results = {}
    let visibleError;
    let visibleSuccess;

    function login () {
        PlayFab.settings.titleId = $preferences.TitleId
        console.log("Attempting login.")
        // Verbose intentionally. 
        let customLoginRequest = {"TitleId": "", "Username": "","Password":""};
            customLoginRequest.TitleId = $preferences.TitleId
            customLoginRequest.Username = $preferences.Username
            customLoginRequest.Password = $preferences.Password

        
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
    <h1>Login With PlayFab</h1>

    <p>
        Signs the user into the PlayFab account, returning a session 
        identifier that can subsequently be used for API calls which 
        require an authenticated user. Unlike most other login API calls, 
        LoginWithPlayFab does not permit the creation of new accounts 
        via the CreateAccountFlag. Username/Password credentials may 
        be used to create accounts via RegisterPlayFabUser, or added 
        to existing accounts using AddUsernamePassword.
    </p>

    <div class="flex">
        
        <div class="flex-auto">
            <label for="usernameInput">username</label>
            <input 
            size="10"
            bind:value="{$preferences.Username}"
            name="usernameInput" class="" type="text">
        </div>

        <div class="flex-auto">
            <label for="passwordInput">password</label>
            <input 
            size="10"
            bind:value="{$preferences.Password}"
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
            <a href="/">HOME</a>
             <h1>{visibleSuccess}</h1>
        {/if}
    </div>
    <div class="error">
        {#if visibleError}
             <h1>{visibleError}</h1>
        {/if}
    </div>



</div>