<script>
	import { ChevronRight } from 'lucide-svelte';

	import RParallax from './R_Parallax.svelte';

	export let header = '';
	export let sub_header = '';
	export let habitable_vol = '';
	export let pressured_vol = '';
	export let crew = '';
	export let img = '';
        export let url = '';
	export let bg_img = '';
	export let big_img = '';
	export let big_img_md = '';
</script>

<div class="">
	<div class="w-[80%] mx-auto flex flex-col">
		<div class="pt-24">
			<h4 class="font-semibold text-xl md:text-xl flex flex-col mx-8 md:mx-0 max-w-[300px]">
				<span class="text-black font-semibold mb-1">{header}</span>
				<span class="text-[#8C847A]">{sub_header}</span>
			</h4>

			{#if url }
                               <a href="{url}" class="flex item-center gap-4 mt-3"
				><ChevronRight color="red" size="20" /> Learn more</a
			> 
                        {/if}
		</div>

		<RParallax
			parallaxImg="/images/roadmap/{bg_img}.png"
			circleImg="/images/roadmap/{img}.png"
			hideIcon="hidden"
		/>

		<div class="flex-1 uppercase text-[#887F75] flex flex-col w-full pb-24 text-sm">
			<h3 class="ml-auto">
				HAbitable Volume: <span class="text-black font-semibold">{habitable_vol}</span>
			</h3>
			<h3 class="ml-auto">
				Pressurized Volume: <span class="text-black font-semibold">{pressured_vol}</span>
			</h3>
			<h3 class="ml-auto">Crew: <span class="text-black font-semibold">{crew}</span></h3>
		</div>
	</div>

	<img src="/images/roadmap/{big_img_md}.png" alt="demo-large -image_" class="hidden md:block" />
	<img
		src="/images/roadmap/{big_img}.png"
		alt="demo-large -image_"
		class="md:hidden block w-full"
	/>
</div>
