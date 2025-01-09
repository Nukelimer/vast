<script>
	import { Plus } from 'lucide-svelte';
	import Button from './reusable/Button.svelte';
</script>

<div class="bg-[#B3ABA3] px-12 py-8">
	<div class=" flex justify-between">
		<Plus size={25} strokeWidth={0.5} color="white" /><Plus
			size={25}
			strokeWidth={0.5}
			color="white"
		/>
	</div>
	<div class=" py-16 md:py-40 md:w-[70%]">
		<p
			class="text-white text-2xl md:text-4xl font-owners text-pretty font-semibold text  mx-auto text-left"
		>
			Vast is developing humanity’s most capable space stations, <span class="text-[#887F75]"
				>pioneering the next giant leap toward long-term living and thriving in space.</span
			>
		</p>

		<Button
			text="See the latest updates"
			styles="bg-white text-black mt-12 text-[1.1em] font-owners font-light tracking-wide flex items-center text-nowrap  "
		/>
	</div>

	<div class="flex justify-between">
		<Plus size={25} strokeWidth={0.5} color="white" /><Plus
			size={25}
			strokeWidth={0.5}
			color="white"
		/>
	</div>
</div>
