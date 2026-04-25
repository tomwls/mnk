<script>
	import { page } from '$app/stores';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}

	const links = [
		{ name: 'All', href: '/' },
		{ name: 'Xbox', href: '/xbox' },
		{ name: 'PS5', href: '/ps5' },
		// { name: 'Steam Deck', href: '/steam-deck' },
		// { name: 'Switch', href: '/switch' },
		{ name: 'Submit', href: '/submit' }
	];
</script>

<nav class="nav">
	<a href="/" class="logo">mnk.gg<span class="cursor">_</span></a>

	<button class="burger" onclick={() => (menuOpen = !menuOpen)} aria-label="Toggle menu">
		<span class="burger-line"></span>
		<span class="burger-line"></span>
		<span class="burger-line"></span>
	</button>

	<ul class="links" class:open={menuOpen}>
		{#each links as link}
			<li>
				<a href={link.href} class:active={$page.url.pathname === link.href} onclick={closeMenu}>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 80%;
		margin: -7px auto 0 auto;
		padding: 16px 32px;
		border: 1px solid #1f3a2a;
		background: rgba(10, 10, 10, 0.5);
		backdrop-filter: blur(6px);
		position: relative;
		flex-direction: row;
	}

	.logo {
		color: #00ff9c;
		font-weight: 600;
		letter-spacing: 1px;
		font-size: 1rem;
	}

	/* blinking cursor */
	.cursor {
		margin-left: 4px;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%,
		50%,
		100% {
			opacity: 1;
		}
		25%,
		75% {
			opacity: 0;
		}
	}

	.links {
		display: flex;
		gap: 32px;
		list-style: none;
		text-transform: uppercase;
	}

	.burger {
		display: none;
		flex-direction: column;
		justify-content: space-around;
		width: 22px;
		height: 20px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 10;
	}

	.burger-line {
		width: 22px;
		height: 1px;
		background: #00ff9c;
		transition: all 0.3s ease;
	}

	/* mobile */
	@media (max-width: 868px) {
		.nav {
			padding: 16px 20px;
			flex-wrap: wrap;
			width: 100%;
		}

		.burger {
			display: flex;
		}

		.links {
			flex-basis: 100%;
			width: 100%;
			display: none;
			flex-direction: column;
			gap: 0;
			background: rgba(10, 10, 10, 0.9);
			backdrop-filter: blur(6px);
			border: none;
			border-top: none;
			margin-top: 16px;
			opacity: 0;
			transform: translateY(-10px);
			transition:
				opacity 0.3s ease,
				transform 0.3s ease;
		}

		.links.open {
			display: flex;
			opacity: 1;
			transform: translateY(0);
		}

		.links li {
			padding: 16px 20px;
			border-bottom: 1px solid rgba(31, 58, 42, 0.3);
		}

		.links li:last-child {
			border-bottom: none;
		}
	}

	a {
		text-decoration: none;
		color: #7aa38b;
		font-size: 0.9rem;
		transition: all 0.2s ease;
		position: relative;
	}

	a:hover {
		color: #00ff9c;
	}

	/* active link */
	a.active {
		color: #00ff9c;
	}

	a.active::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -6px;
		width: 100%;
		height: 1px;
		background: #00ff9c;
	}
</style>
