<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Hero from '$lib/components/Hero.svelte';

	let { data, children, searchQuery } = $props();
</script>

<Hero
	totalGames={data.totalGames}
	totalXboxGames={data.totalXboxGames}
	totalPs5Games={data.totalPs5Games}
	totalSwitchGames={data.totalSwitchGames}
	bind:searchQuery
/>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
