<script>
	import { Video } from 'flowbite-svelte';
	import { ChevronLeft, ChevronRight, Plus } from 'lucide-svelte';
	import Button from '../../../../component/reusable/Button.svelte';
	

</script>

<section class="pt-40 w-[90%] justify-between flex-col items-center md:flex-row flex md:mx-auto pb-24">
	<div class=" h-[30vh] items-center w-[90%]  hidden md:flex">
		
		<div class="flex-1 flex items-end h-full">
			<h1
				class="text-[#333333] text-[5rem] md:text-[7rem] lg:text-[11.5rem] 2xl:text-[18rem] font-bold leading-none"
			>
				Updates
			</h1>
		</div>

		
		<div class="relative w-px bg-[#333333] h-[100%] mx-8">
			<span class="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-px bg-[#333333]"
			></span>
			<span
				class="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-px bg-[#333333]"
			></span>
		</div>

		
		<div class="flex-1 flex flex-col justify -center space-y-4 h-full justify-end lg:max-w-[300px]">
			<h2 class="text-[#333333] text-3xl lg:text-2xl font-semibold">
				Latest news and announcements
			</h2>
			<a href="/updates#press" class=" text-sm lg:text-base font-medium flex items-center gap-1">
				<ChevronRight color="#ff5623" />
				<Button text="View Press" />
			</a>
		</div>
	</div>
	<div class="flex flex-col md:hidden w-[90%]  gap-4">
		<h1
			class="text-[#333333] text-[5rem] md:text-[7rem] lg:text-[11.5rem] 2xl:text-[18rem] font-bold leading-none"
		>
			Updates
		</h1>
		<h2 class="text-[#333333] w-2/3 text-2xl lg:text-2xl font-semibold">Latest news and announcements</h2>
		<a href="/updates#press" class=" text-sm lg:text-base font-medium flex items-center gap-1">
			<ChevronRight color="#ff5623" />
			<Button text="View Press" />
		</a>
	</div>

	
</section>
