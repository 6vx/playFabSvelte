<div class="logo">
    <img src="https://deathmettastorage.s3.us-west-2.amazonaws.com/files/playfabsveltelogo128.png" alt="playfabsveltelogo">
</div>

<h2>how to use:</h2>
<ol>
    <li>add <a href="https://blog.playfab.com/blog/playfab-now-serving-javascript-sdk-via-cdn/">playfab script</a> to head of <a href="https://github.com/6vx/playFabSvelte/blob/metta/src/app.html">app.html</a></li>
    <li>add whichever <a href="https://github.com/6vx/playFabSvelte/tree/metta/src/routes">components</a> you need</li>
    <li><a href="https://github.com/6vx/playFabSvelte/blob/metta/src/lib/localStore.js">configure</a> your <a href="https://developer.playfab.com">titleId</a></li>
</ol>

<h2>components:</h2>
<ul>
    <li><a href="/RegisterPlayFabUser">Register PlayFab User</a></li>
    <li><a href="/LoginWithPlayFab">Login With PlayFab</a></li>
    <li><a href="/SendAccountRecoveryEmail">Send Account Recovery Email</a></li>
    <p style="font-weight: bolder;">login to use below</p>
    <li><a href="/GetFriendsList">Get Friends List</a></li>
    <li><a href="/AddFriend">Add Friend</a></li>
    <li><a href="/UpdateUserData">Update User Data</a></li>
    <li><a href="/GetUserData">Get User Data</a></li>
    <li><a href="/GetCatalogItems">Get Catalog Items</a></li>
    <li><a href="/GetUserInventory">Get User Inventory</a></li>
    <!-- <li><a href="/AddGenericID">Add Generic ID</a></li> -->
    <li><a href="/GetAccountInfo">Get Account Info</a></li>
    <li><a href="/GetPlayerStatistics">Get Player Statistics</a></li>
    <li><a href="/UpdatePlayerStatistics">Update Player Statistics</a> (disabled server side)</li> 
    <li><a href="/GetLeaderboard">Get Leaderboard</a></li>
    <li><a href="/GetTime">Get Time</a></li>
    <li><a href="/GetTitleData">Get Title Data</a></li>
    <li><a href="/GetTitleNews">Get Title News</a></li>



     
</ul>

<h2>notes:</h2>
<ul>
    <li>Refreshing the page currently results in a new login being necessary, I'm hesitant to add a watcher to the layout.</li>
    <li>Using the CDN instead of the npm package.</li>
</ul>


<style>
    img {
        height: 128px;
        width: 128px;
    }
    .logo {
        text-align: center;
        padding: 10px 10px 10px 10px;
    }
</style>

