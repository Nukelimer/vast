<script>
	import { Video } from 'flowbite-svelte';
	import { ChevronLeft } from 'lucide-svelte';
</script>

<div class="">
	<div class="relative -z-50 max-h-[80vh]">
		<Video
			src="/video/Homepage Header v2.mp4"
			autoplay
			loop
			muted
			class="w-full max-w-full h-[60vh] md:h-auto  pointer-events-none object-cover "
			trackSrc="flowbite.mp4"
		/>

              

		<div class="absolute !bottom-6 md:bottom-40 px-4">
			<p
				class="text-3xl sm:text-6xl md:text-6xl  xl:text-7xl text-white font-semibold w-[60%] md:w-[60%] tracking-tight mb-20"
			>
				Building next-generation space stations
			</p>

			<button
				class="px-6 py-2 bg-gray-600/50 text-white font-owners font-light tracking-wide flex items-center"
			>
				<ChevronLeft size={25} strokeWidth={0.5} color="white" />
				Watch full Video
			</button>
		</div>
	</div>
</div>
