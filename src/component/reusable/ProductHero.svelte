<script>
	import { Video } from 'flowbite-svelte';
	import { ChevronLeft, ChevronRight, Plus } from 'lucide-svelte';

	export let img = '';
	export let text = '';
	export let btn_text = '';
	export let video_url = '';
	export let create_your_mission = '';
	export let create_mission_text = '';
	export let blacktext = '';
	export let darktext = '';
	export let whitetext = '';
</script>

<section class="mt-60 justify-center items-center flex flex-col w-full mb-16">
	<div class="flex flex-col md:flex-row mx-4 mb-12 justify-between">
		<img src={img} alt="product img" class="w-[90%] md:w-[50%] md:h-fit my-auto max-w-[1200px]" />

		<div class=" md:w-[40%] flex items-end lg:justify-end">
			<h2
				class="text-3xl max-w-[440px] font-semibold mt-6 md:text-3xl lg:text-3xl md:justify-self-end w-full"
			>
				{text}
			</h2>

			{#if create_your_mission}
				<button class="px-6 py-2 text-white font-owners font-light tracking-wide flex items-center">
					<ChevronRight size={25} strokeWidth={0.5} color="white" />
					{create_mission_text}
				</button>
			{/if}
		</div>
	</div>
	<div class="flex justify-center mx-auto flex-col relative w-full md:w-full">
		<Video
			src={video_url}
			autoplay
			loop
			muted
			class="w-full md:w-full max-w-full  px-0 md:px-6  md:h-[80%]  pointer-events-none object-cover overflow-hidde n  "
			trackSrc="flowbite.mp4"
		/>

		{#if blacktext}
			<div class=" flex justify-between md:w-[96%] mx-auto max-w-full w-full mt-5 mb-12">
				<Plus size={35} strokeWidth={0.5} color="black" />

				<Plus size={35} strokeWidth={0.5} color="black" />
			</div>
		{/if}

		<div class="absolute bottom-28 left-8 lg:left-20">
			<button
				class="px-6 py-2 backdrop-blur-2xl text-white font-owners font-light tracking-wide flex items-center"
			>
				<ChevronRight size={35} strokeWidth={0.5} color="white" />
				{btn_text}
			</button>
		</div>
	</div>

	<div class="">
		{#if whitetext}
			<p><span>{whitetext}</span> <span>{darktext}</span></p>
		{:else if blacktext}
			<p
				class="text-[1.7em] flex flex-col mx-10 md:mx-20 font-semibold leading-9 tracking-tight w-[80%] lg:text-[3.5rem] lg:leading-[3.2rem] lg:pr-60"
			>
				<span class="text-black">{blacktext}</span> <span class="text-[#B3ABA3]">{darktext}</span>
			</p>
		{/if}
	</div>
</section>
