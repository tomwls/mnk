<script>
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Submit from '$lib/components/Submit.svelte';
</script>

<Navbar />
<Submit />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
