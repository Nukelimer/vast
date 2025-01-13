<script>
	import '../app.css';
	import Footer from '../component/Footer.svelte';
	import Header from '../component/Header.svelte';
	let { children } = $props();
</script>




{@render children()}

<Footer/>