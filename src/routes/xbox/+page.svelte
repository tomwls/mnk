<script>
	import GameTable from '$lib/components/GameTable.svelte';

	let { data, searchQuery } = $props();
</script>

<GameTable games={data.games} {searchQuery} />
