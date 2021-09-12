<script lang="typescript">
    import Menu from '$lib/components/Menu.svelte'
    import Footer from '$lib/components/Footer.svelte'

    import '$lib/styles.css';
</script>

<svelte:head>
    <title>PlayFab + Svelte</title>
    <meta name="description" content="Demo App demonstrating PlayFab and Svelte components individually. Some combinations implemented in deathMetta.">
    <meta name="keywords" content="word, game, rpg, canadian, software, developer, kitebot, playfab + svelte, deathmetta, xbox, microsoft, word game, svelte, playfab">
</svelte:head>

<Menu />
<slot></slot>
<Footer />