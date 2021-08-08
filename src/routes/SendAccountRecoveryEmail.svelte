<script lang="typescript">
    // https://t.ly/sksO
    // PlayFab REST Api Send Account Recovery Email
    import { preferences } from '$lib/localStore'
    let emailHolder = ""
    let results = {}
    let visibleError;
    let visibleSuccess;

    function sendRecoveryEmail () {
        PlayFab.settings.titleId = $preferences.TitleId
        let customLoginRequest = {"TitleId": $preferences.TitleId, 
                                    "Email":emailHolder,
                                 };
        PlayFabClientSDK.SendAccountRecoveryEmail(customLoginRequest, (res, err) => {
            if (err) {
                console.log(err)
                visibleError = err.error
            } else {
                visibleSuccess = res.status
                results = res.data
            }
        })
    
    }
</script>

<div>
    <h1>Register Account Recovery Email</h1>

    <p>Forces an email to be sent to the registered email address for the user's 
        account, with a link allowing the user to change the password. 
        If an account recovery email template ID is provided, an email using 
        the custom email template will be used.
    </p>

    <div class="flex">
        <div class="flex-auto">
            <label for="email">email</label>
            <input 
            size="10"
            class="" type="text" name="email"
                bind:value="{emailHolder}">
        </div>

        <div class="flex-auto">
            <button class=""
            on:click="{sendRecoveryEmail}">
                Recovery
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