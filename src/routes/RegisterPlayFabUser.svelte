<script lang="ts">
    // https://svelte.dev/tutorial/text-inputs
    // Binding text inputs in Svelte

    // https://t.ly/LIQb
    // PlayFab REST Api Register PlayFab User

    // Importing store first
    import { preferences } from '$lib/localStore'

    // intentionally not directly binding to store here 
    // this is the first component and should be as verbose
    // and easy to read as possible ---
    // To make this call we need the username, password and email
    // These variables hold them
    let usernameHolder = ""
    let passwordHolder = ""
    let emailHolder = ""

    // Every call is going to succeed with results or fail,
    // these are just for making this eventualities plain
    let results = {}
    let visibleError;
    let visibleSuccess;

    // javascript functions use camelCase 
    function register () {
        // initializing PlayFab with TitleId before call
        PlayFab.settings.titleId = $preferences.TitleId
        // building a request using the parameters required by the API
        let customLoginRequest = {"TitleId": $preferences.TitleId, 
                                    "Username": usernameHolder,
                                    "Password":passwordHolder, 
                                    "Email":emailHolder,
                                    // this optional parameter makes it so 
                                    // people need to include an email
                                    "RequireBothUsernameAndEmail":true};
        // this is the actual call, where we pass the built object 
        // into the method provided by the Playfab script. 
        PlayFabClientSDK.RegisterPlayFabUser(customLoginRequest, (res, err) => {
            if (err) {
                // errors trigger to the console here
                console.log(err)
                // but it's nice to see it in the browser too
                // so we use s-if to pop the error into the page
                visibleError = err.error
            } else {
                // success! send the status to the page
                visibleSuccess = res.status
                // save the results for inspecting
                results = res.data
                // keep the session ticket for future authenticated calls
                $preferences.SessionTicket = results.SessionTicket
                // log the playfab Id for use in other calls
                $preferences.PlayFabId = results.PlayFabId
            }
        })
    
    }
</script>

<div>
    <h1>Register PlayFab User</h1>

    <p>Registers a new Playfab user account, returning a session identifier that can 
        subsequently be used for API calls which require an authenticated user. 
        You must supply either a username or an email address.</p>

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
            <label for="email">email</label>
            <input 
            size="10"
            class="" type="text" name="email"
                bind:value="{emailHolder}">
        </div>

        <div class="flex-auto">
            <button class=""
            on:click="{register}">
                register
            </button>
        </div>

    </div>
    <div class="success">
        {#if visibleSuccess}
             <p>{visibleSuccess}</p>
        {/if}
    </div>
    <div class="error">
        {#if visibleError}
             <p>{visibleError}</p>
        {/if}
    </div>
</div>