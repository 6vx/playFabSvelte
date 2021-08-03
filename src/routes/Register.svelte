<script lang="typescript">
    import { preferences } from '$lib/localStore'
    let usernameHolder = ""
    let passwordHolder = ""
    let emailHolder = ""
    let results = {}
    let visibleError;
    let visibleSuccess;
    
    function register () {
        PlayFab.settings.titleId = '73021'
        let customLoginRequest = {"TitleId": $preferences.TitleId, "Username": usernameHolder,"Password":passwordHolder, "Email":emailHolder, "RequireBothUsernameAndEmail":true};
        $preferences.Email = emailHolder
        PlayFabClientSDK.RegisterPlayFabUser(customLoginRequest, (res, err) => {
            if (err) {
                console.log(err)
                visibleError = err.error
            } else {
                visibleSuccess = res.status
                results = res.data
                $preferences.SessionTicket = results.SessionTicket
                $preferences.PlayFabId = results.PlayFabId
            }
        })
    
    }
</script>

<div>

    <p>this component takes your email, username and password, saves them to local storage and tries to register with playfab.</p>
    <p>if successful, the session ticket response will be saved to local storage and used for calls in other components.</p>
    <p>Errors are logged to console and to below the form.</p>

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

<style>

</style>