<script>
	let { game } = $props();
</script>

<tr>
	<td class="game-name">{game.name}</td>
	<td><span class="platform">{game.platform}</span></td>
	<td>
		<div class="badges">
			<span class={'badge ' + game.support}>
				{game.support}
			</span>

			{#if game.recommendation}
				<span class={'badge ' + game.recommendation}>
					{game.recommendation}
				</span>
			{/if}
		</div>
	</td>

	<td class="notes-column">
		{#if game.source}
			<div class="source">
				<a href={game.source} target="_blank" rel="noopener noreferrer">
					{game.notes}
				</a>
			</div>
		{:else}
			{game.notes}
		{/if}
	</td>
</tr>

<style>
	td {
		padding: 12px;
		border-bottom: 1px solid #1f3a2a;
		border-left: 1px solid #1f3a2a;
		color: #d8ffe8;
		font-size: 0.85rem;
	}

	.game-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	tr:hover {
		background: rgba(0, 255, 156, 0.05);
	}

	.platform {
		text-transform: uppercase;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}

	.badge {
		padding: 3px 8px;
		font-size: 0.7rem;
		text-transform: uppercase;
		border: 1px solid #1f3a2a;
		display: inline-block;
	}

	.full {
		color: #00ff9c;
		border-color: #00ff9c;
	}

	.partial {
		color: #ffaa00;
		border-color: #ffaa00;
	}

	.avoid {
		color: #ff4d4d;
		border-color: #ff4d4d;
	}

	a {
		color: #7aa38b;
		text-decoration: none;
	}

	a:hover {
		color: #00ff9c;
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.notes-column {
			display: none;
		}
	}
</style>
