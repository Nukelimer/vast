<script>
	import '../../app.css';

	import Header from '../../component/Header.svelte';
	import Footer from './haven-1/components/Footer.svelte';
	let { children } = $props();
</script>

<Header />
{@render children()}

<Footer />
