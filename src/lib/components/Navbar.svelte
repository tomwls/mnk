<script>
	import { page } from '$app/stores';

	const links = [
		{ name: 'All', href: '/' },
		{ name: 'Xbox', href: '/xbox' },
		{ name: 'PS5', href: '/ps5' },
		{ name: 'Switch', href: '/switch' },
		{ name: 'Submit', href: '/submit' },
		{ name: 'API', href: '/api' }
	];
</script>

<nav class="nav">
	<a href="/" class="logo">mnk.gg<span class="cursor">_</span></a>

	<ul class="links">
		{#each links as link}
			<li>
				<a href={link.href} class:active={$page.url.pathname === link.href}>
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
		padding: 16px 32px;
		border-bottom: 1px solid #1f3a2a;
		background: rgb(10, 10, 10);
		backdrop-filter: blur(6px);
	}

	.logo {
		color: #00ff9c;
		font-weight: 600;
		letter-spacing: 1px;
		font-size: 1rem;
	}

	/* Blinking cursor */
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

	/* Active link */
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

	/* Mobile (basic) */
	@media (max-width: 768px) {
		.nav {
			padding: 12px 20px;
		}

		.links {
			gap: 16px;
		}
	}
</style>
