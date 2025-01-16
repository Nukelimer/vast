<script>
	import { onMount } from 'svelte';

	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import Button from '../../../../component/reusable/Button.svelte';

	let scrollYAxis = 0;
	let container;
	export let productName = '';
	export let launchingData = '';
	export let Data = [];
	export let circleImg = '';
	export let parallaxImg = '';
	export let aboutIt = '';
	export let text = '';
	export let additionalStyles = '';
	export let url =''
	export let icon =''	
	export let hideIcon =''
export let styleOveride =''

	const handleScroll = () => {
		if (container) {
			const rect = container.getBoundingClientRect();
			const top = -rect.top;
			const height = rect.height;


			scrollYAxis = Math.min(Math.max(top, 0), height);
		}
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			
		};
	});
</script>

<div bind:this={container} class="bg-[#ECE8E3] px-3 pt-12 ">
	<div class="flex justify-between pb-12 md:pb-0">
		<div class="text-sm font-ow ners">
			<p class="text-black font-semibold uppercase">{productName}</p>
			<p class=" !text-[#ff5623] uppercase  font-medium {additionalStyles} ">{launchingData}</p>
		</div>

		<div class=" flex flex-col font -owners text-xs">
			{#if Data.length > 0}
				{#each Data as item}
					<span class="text-right text-[#887F75] uppercase text-xs py-1 text-nowrap font-semibold">
						{item.label}: <span class="font-semibold text-black">{item.value}</span>
					</span>
				{/each}
			{/if}
		</div>
	</div>

	<div class=" py-64 relative z-10 w-full mx-auto flex flex-col justify-center items-center parent">
	
		<img
			src={parallaxImg}
			alt="background circle"
			class="select-none mx-auto  w-full   object-cover"
		/>

	

		<img
			src={circleImg}
			alt="background haven"
			class="select-none  mx-auto max-w-[400px]  md:max-w-[450px] max-h-[400px] md:max-h-[500px] ml-1 w-full  absolute  img {styleOveride}"
			style="transform: translateY(-{scrollYAxis * 0.5}px);"
		/>
	</div>

	<div class="max-w-[300px]  md:max-w-[245px]  -translate-y-12 hid den ml-4 {hideIcon}">
		<h2 class="text-3xl leading-7 font-semibold mb-2">{aboutIt}</h2>
		<a href="{url}">
			<span class="flex items-center cursor-pointer">{#if icon ==='left'}
				<ChevronLeft color="#ff5623" />

				{:else}

				<ChevronRight color="#ff5623" />
			{/if} <Button {text} /></span></a
		>
	</div>
</div>

<style>
	.img {
		transition: transform 0.2s ease-out;
	}
</style>
