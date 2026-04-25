<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { searchQuery } from '$lib/stores/search';
	import Navbar from '$lib/components/Navbar.svelte';
	import Submit from '$lib/components/Submit.svelte';

	let cta = $derived.by(() => {
		const route = page.url.pathname;

		const map = {
			'/xbox': 'Track Mouse & Keyboard Support for XBOX',
			'/ps5': 'Track Mouse & Keyboard Support for PS5',
			'/steam-deck': 'Track Mouse & Keyboard Support for Steam Deck',
			'/switch': 'Track Mouse & Keyboard Support for Switch',
			'/submit': 'Help to Improve the Database'
		};

		return map[route] ?? 'Track Mouse & Keyboard Support for Console';
	});

	let placeholder = $derived.by(() => {
		const route = page.url.pathname;

		const map = {
			'/xbox': 'Search XBOX games',
			'/ps5': 'Search PS5 games',
			'/switch': 'Search Switch games'
		};

		return map[route] ?? 'Search all games & platforms';
	});

	let { totalGames, totalXboxGames, totalPs5Games, totalSwitchGames } = $props();

	const lines = [
		"Don't you guys have controllers?",
		'Because Windows sucks.',
		"We can't afford RAM.",
		'Too old to learn how a controller works.',
		'PC master race on a budget.'
	];

	// Rotating banner messages

	let i = $state(0);
	let current = $derived(lines[i]);

	onMount(() => {
		const interval = setInterval(() => {
			i = (i + 1) % lines.length;
			current = lines[i];
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<section class="hero">
	<Navbar />
	<div class="tracking-line">
		<span class="live-dot"></span>
		Tracking <span class="tracking-number">{totalGames}</span> games.
	</div>

	<h1>{cta}</h1>

	<div class="tagline">
		{#key current}
			<p in:fade={{ duration: 250 }} out:fade={{ duration: 0 }}>
				{current}
			</p>
		{/key}
	</div>

	{#if page.url.pathname !== '/submit'}
		<div class="search">
			<input
				type="text"
				{placeholder}
				autocomplete="off"
				oninput={(e) => searchQuery.set(e.target.value)}
			/>
		</div>

		<div class="stats">
			<a href="/xbox" class="stat-link">
				<div class="stat">
					<span class="label">{totalXboxGames} GAMES</span>
					<span class="platform-svg">
						<svg
							width="32px"
							height="32px"
							viewBox="0 0 76 76"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							baseProfile="full"
							enable-background="new 0 0 76.00 76.00"
							xml:space="preserve"
						>
							<path
								fill="#00ff9c"
								fill-opacity="1"
								stroke-width="0.2"
								stroke-linejoin="round"
								d="M 19,10.2917C 27.3776,9.99247 34.8506,14.4426 38,16.6332C 41.1494,14.4426 48.6224,9.99247 57,10.2917C 60.1667,11.4792 60.5625,12.2709 60.5625,12.2709C 60.5625,12.2709 51.8542,15.0417 45.5208,22.9583C 53.8333,33.6458 65.3125,48.2917 63.7292,60.9583C 55.4167,46.3125 45.8739,35.2702 38,30.6145C 30.1261,35.2702 20.5833,46.3125 12.2708,60.9583C 10.6875,48.2917 22.1667,33.6458 30.4792,22.9583C 24.1458,15.0417 15.4375,12.2709 15.4375,12.2709C 15.4375,12.2709 15.8333,11.4792 19,10.2917 Z "
							/>
						</svg>
					</span>
					<span class="value">XBOX</span>
				</div>
			</a>

			<a href="/ps5" class="stat-link">
				<div class="stat">
					<span class="label">{totalPs5Games} GAMES</span>
					<span class="platform-svg"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							fill="#00bbf0"
							class="bi bi-playstation"
							viewBox="0 0 16 16"
						>
							<path
								d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"
							/>
						</svg></span
					>
					<span class="value">PS5</span>
				</div>
			</a>

			<!-- <a href="/ps5" class="stat-link">
				<div class="stat">
					<span class="label">Coming Soon</span>
					<span class="platform-svg"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							fill="#ffffff"
							class="bi bi-steam"
							viewBox="0 0 16 16"
						>
							<path
								d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"
							/>
							<path
								d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"
							/>
						</svg></span
					>
					<span class="value">Steam Deck</span>
				</div>
			</a>

			<a href="/switch" class="stat-link">
				<div class="stat">
					<span class="label">Coming Soon</span>
					<span class="platform-svg"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							fill="#ff3e00"
							class="bi bi-nintendo-switch"
							viewBox="0 0 16 16"
						>
							<path
								d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034 1.61 1.61 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256"
							/>
							<path
								d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"
							/>
						</svg></span
					>
					<span class="value">Switch</span>
				</div>
			</a> -->
		</div>
	{/if}

	{#if page.url.pathname === '/submit'}
		<Submit />
	{/if}
</section>

<style>
	.hero {
		padding: 40px 24px 40px;
		text-align: center;
		border-bottom: 1px solid #1f3a2a;
		position: relative;
		background: rgb(12, 12, 12);
		z-index: 0;
	}

	/* subtle grid */
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(0, 255, 156, 0.06) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 255, 156, 0.06) 1px, transparent 1px);
		background-size: 40px 40px;
		opacity: 0.35;
		pointer-events: none;
		z-index: 0;
	}

	/* subtle noise */
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.2'/%3E%3C/svg%3E");
		opacity: 0.04;
		pointer-events: none;
		z-index: 0;
	}

	.hero > * {
		position: relative;
		z-index: 1;
	}

	/* tracking line */
	.tracking-line {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		color: #7aa38b;
		font-size: 0.85rem;
		margin: 32px 0 16px;
		cursor: default;
	}

	.tracking-number {
		color: #00ff9c;
		font-weight: 600;
		text-decoration: dotted underline;
		text-underline-offset: 5px;
	}

	/* pulsating dot */
	.live-dot {
		width: 8px;
		height: 8px;
		margin-right: 5px;
		background: #00ff9c;
		border-radius: 50%;
		position: relative;

		/* subtle core glow */
		box-shadow: 0 0 4px rgba(0, 255, 156, 0.6);
	}

	/* slow pulse ring */
	.live-dot::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;

		width: 8px;
		height: 8px;
		background: rgba(0, 255, 156, 0.5);
		border-radius: 50%;

		transform: translate(-50%, -50%);
		animation: pulse 2.4s ease-out infinite;
	}

	/* animation */
	@keyframes pulse {
		0% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0.5;
		}
		70% {
			transform: translate(-50%, -50%) scale(3.2);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	h1 {
		font-size: 1.5rem;
		color: #00ff9c;
		margin-bottom: 16px;
		letter-spacing: 1px;
		cursor: default;
	}

	.tagline {
		min-height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: default;
	}

	p {
		color: #7aa38b;
		margin-bottom: 32px;
	}

	.search {
		margin-bottom: 32px;
	}

	.search input {
		padding: 12px 16px;
		width: 100%;
		max-width: 400px;
		border: 1px solid #1f3a2a;
		background: rgb(10, 10, 10);
		color: #d8ffe8;
		font-size: 0.9rem;
		text-align: center;
	}

	.search input:focus::placeholder {
		opacity: 0;
	}

	.search input:focus {
		outline: none;
		border-color: #00ff9c;
		color: #00ff9c;
	}

	/* stats */
	.stats {
		display: flex;
		justify-content: center;
		gap: 32px;
		flex-wrap: wrap;
	}

	.platform-svg {
		display: block;
		align-items: center;
		padding: 6px;
	}

	.stat {
		border: 1px solid #1f3a2a;
		padding: 12px 16px;
		min-width: 160px;
		background: rgb(10, 10, 10);
	}

	.stat-link {
		text-decoration: none;
	}

	.stat-link:hover .stat {
		border-color: #00ff9c;
	}

	.label {
		display: block;
		text-transform: uppercase;
		font-size: 0.7rem;
		color: #7aa38b;
		margin-bottom: 6px;
	}

	.value {
		text-transform: uppercase;
		color: #d8ffe8;
	}

	/* mobile */
	@media (max-width: 868px) {
		h1 {
			font-size: 1.25rem;
			padding: 0 32px;
		}
		.search input {
			max-width: 80%;
		}
	}
</style>
