<script>
	import '../app.css';
	import Header from '../component/Header.svelte';
	let { children } = $props();
</script>



<Header/>
{@render children()}