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
    <li><a href="/GetUserData">Get User Data</a></li>
    <li><a href="/GetCatalogItems">Get Catalog Items</a></li>
</ul>

<h2>notes:</h2>
<ul>
    <li>Refreshing the page currently results in a new login being necessary, I'm hesitant to add a watcher to the layout because I'm trying to keep this as a super simple demonstration.</li>
    <li>I'm using the CDN instead of the package. Not because that's the way I want it, but because it's the only way that I can get it to work right now.</li>
    <li>I use lang="typescript" in most of my components for the assistance it provides, but I don't generally use anything that requires TS. You can use plain JS.</li>
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

