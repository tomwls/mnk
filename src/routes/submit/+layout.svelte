<script>
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<Footer />

{@render children()}
