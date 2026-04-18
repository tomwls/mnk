<script>
	import { searchQuery } from '$lib/stores/search';
	import GameRow from '$lib/components/GameRow.svelte';

	let { games = [] } = $props();

	let filterMode = $state('all');

	let filteredGames = $derived(
		(() => {
			const q = $searchQuery.toLowerCase().trim();

			return games.filter((g) => {
				const matchesSearch =
					!q || g.name.toLowerCase().includes(q) || g.platform.toLowerCase().includes(q);

				const matchesRadio = filterMode === 'all' || g.support === filterMode;

				return matchesSearch && matchesRadio;
			});
		})()
	);
</script>

<section class="table-section">
	<div class="table-header">
		<div class="filters">
			<label class="filter {filterMode === 'all' ? 'active' : ''}">
				<input type="radio" bind:group={filterMode} value="all" />
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-arrow-down-short"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
						/>
					</svg>All</span
				>
			</label>
			<label class="filter {filterMode === 'full' ? 'active' : ''}">
				<input type="radio" bind:group={filterMode} value="full" />
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-check"
						viewBox="0 0 16 16"
					>
						<path
							d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
						/>
					</svg>Full Support</span
				>
			</label>
			<label class="filter {filterMode === 'partial' ? 'active' : ''}">
				<input type="radio" bind:group={filterMode} value="partial" />
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-question"
						viewBox="0 0 16 16"
					>
						<path
							d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"
						/>
					</svg>Partial Support</span
				>
			</label>
		</div>
	</div>

	<table class="game-table">
		<thead>
			<tr>
				<th>Game</th>
				<th>Platform</th>
				<th>Support</th>
				<th>Notes</th>
			</tr>
		</thead>

		<tbody>
			{#each filteredGames as game}
				<GameRow {game} />
			{/each}
		</tbody>
	</table>
</section>

<div class="footer">
	<p>mnk.gg is not affiliated with Microsoft, Sony, Nintendo or any game publisher.</p>
	<p>
		The information on this site is collected from various sources and may be inaccurate or
		outdated. Use it at your own risk.
	</p>
	<p>
		Found a game that's missing or listed with wrong support? <a href="/submit">Submit it here</a>.
	</p>
	<p>
		Built by <a href="https://github.com/tomwls">Tom</a>.
	</p>
</div>

<style>
	.table-section {
		margin: 10px;
	}

	.table-header {
		margin: 0 auto;
		width: 80%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.filters {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.filters svg {
		vertical-align: middle;
		margin: 0 5px 2.5px 0;
	}

	.filter {
		position: relative;
		background: transparent;
		border: 1px solid #1f3a2a;
		color: #7aa38b;
		padding: 6px 10px;
		margin-top: 20px;
		font-size: 0.75rem;
		cursor: pointer;
		transition: 0.2s;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.filter input[type='radio'] {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	.filter:hover {
		border-color: #00ff9c;
		color: #00ff9c;
	}

	.filter.active {
		border-color: #00ff9c;
		color: #00ff9c;
		background: rgba(0, 255, 156, 0.1);
	}

	/* table */
	.game-table {
		width: 80%;
		margin: 0 auto;
		border-collapse: collapse;
		border: 1px solid #1f3a2a;
		background: rgba(15, 23, 15, 0.3);
		table-layout: fixed;
	}

	/* headers */
	.game-table th {
		text-align: left;
		padding: 12px;
		font-size: 0.75rem;
		color: #00ff9c;
		background: rgb(10, 10, 10);
		border-bottom: 1px solid #1f3a2a;
		border-left: 1px solid #1f3a2a;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.footer {
		text-align: center;
		padding: 20px;
		color: #7aa38b;
		font-size: 0.75rem;
		line-height: 2;
	}

	svg {
		margin-bottom: 4px;
	}

	a {
		color: #7aa38b;
		text-decoration: underline;
	}

	a:hover {
		color: #00ff9c;
	}
</style>
