<script lang="typescript">
    import { get } from 'svelte/store'
    import { preferences } from '$lib/localStore'

    let usernameHolder = ""
    let passwordHolder = ""
    let results = {}
    

    function login () {
        PlayFab.settings.titleId = '73021'
        console.log("Attempting login.")
        
        let customLoginRequest = {"TitleId": "", "Username": "","Password":""};
            customLoginRequest.TitleId = $preferences.TitleId
            customLoginRequest.Username = usernameHolder
            $preferences.Username = usernameHolder
            customLoginRequest.Password = passwordHolder
            $preferences.Password = passwordHolder
        
        PlayFabClientSDK.LoginWithPlayFab(customLoginRequest, (res, err) => {
            if (err) {
                console.log(err)
            } else {
                // results = res.data
                // $preferences.SessionTicket = results.SessionTicket
                // $preferences.playFabId = results.PlayFabId
                // console.log($preferences.SessionTicket)
                console.log(res)
            }
        })   
    }

</script>

<div>

    <div class="flex m-2">
        
        <div class="flex-auto">
            <label for="usernameInput">username</label>
            <input 
            bind:value="{usernameHolder}"
            name="usernameInput" class="m-2 border-b-2 bg-black" type="text">
        </div>

        <div class="flex-auto">
            <label for="passwordInput">password</label>
            <input 
            bind:value="{passwordHolder}"
            name="passwordInput" class="m-2 border-b-2 bg-black" type="password">
        </div>

        <div class="flex-auto">
            <button class=""
            on:click="{login}">
                login
            </button>
        </div>

    </div>



</div>