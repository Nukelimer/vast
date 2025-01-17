<script>
	import Hero from './components/Hero.svelte';
	import InThePress from './components/InThePress.svelte';
	import Updates from './components/Updates.svelte';
</script>

<section>
	<div class="bg-[#ECE8E3] overflow-hidden">
		<Hero />
		<div class="flex mx-auto w-[90%]">
			<Updates />
		</div>
		<div class="flex mx-auto w-[90%] #press">
			<InThePress />
		</div>
	</div>
</section>
