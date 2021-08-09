<script lang="typescript">
    import Menu from '$lib/components/Menu.svelte'
    import Footer from '$lib/components/Footer.svelte'

    import '$lib/styles.css';
</script>

<svelte:head>
    <title>PlayFab + Svelte</title>
</svelte:head>

<Menu />

<slot></slot>

<Footer />

<style>

</style>