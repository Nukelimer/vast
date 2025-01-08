<script>
	let scrollY = 0;
	let bgColor = 'transparent';
	let bg_Color = 'white';
	let invertColor = 'filter invert';
	import { onMount } from 'svelte';
	import VanishingHeader from './VanishingHeader.svelte';

	let isOpen = false;

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleMenu();
		}
	};

	const handleScroll = () => {
		scrollY = window.scrollY;
		bgColor = scrollY > 100 ? 'white' : 'transparent';
		bg_Color = scrollY > 100 ? 'black' : 'white';
		invertColor = scrollY > 100 ? '' : 'filter invert';
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<VanishingHeader>
	<nav class="flex max-h-[3.75rem] justify-between w-full px-6 py-2 " style="background-color: {bgColor}">
		<img src="/images/logo_vast.svg" alt="logo" class={invertColor} />

		<div
			class="relative w-8 h-8 cursor-pointer flex flex-col justify-center items-center"
			on:click={toggleMenu}
			on:keydown={handleKeyDown}
			tabindex="0"
			role="button"
			aria-label="Toggle menu"
			aria-expanded={isOpen}
		>
			<span
				class="block w-full h-[1px] translate-y-[1px] bg-gray-800 rounded transition-transform duration-300 ease-in-out"
				class:rotate-45={isOpen}
				class:translate-y-[7px]={!isOpen}
				style="background-color: {bg_Color}"
			></span>
			<span
				class="block w-full h-[1px] bg-gray-800 rounded transition-transform duration-300 ease-in-out"
				class:-rotate-45={isOpen}
				class:-translate-y-[7px]={!isOpen}
				style="background-color: {bg_Color}"
			></span>
		</div>
	</nav>
</VanishingHeader>
