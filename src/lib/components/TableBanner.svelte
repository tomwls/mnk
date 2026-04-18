<script>
	let showBanner = $state(true);
</script>

{#if showBanner}
	<div class="banner">
		<a href="/submit"
			><p class="text">Think a game is missing or listed with wrong support? Let us know!</p></a
		>

		<button class="close" onclick={() => (showBanner = false)}>✕</button>
	</div>
{/if}

<style>
	.banner {
		background: none;
		color: #7aa38b;
		padding: 12px;
		font-size: 0.85rem;
		border-bottom: 1px solid #1f3a2a;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.text {
		flex: 1;
		text-align: center;
		padding-right: 30px;
		cursor: default;
	}

	.close {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);

		background: transparent;
		border: none;
		color: #7aa38b;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.close:hover {
		color: #00ff9c;
	}

	a {
		color: #7aa38b;
		text-decoration: underline;
	}

	a:hover {
		color: #00ff9c;
	}
</style>
