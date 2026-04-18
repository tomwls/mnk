<script>
	import GameTable from '$lib/components/GameTable.svelte';

	let { data } = $props();
</script>

<GameTable games={data.games} />
