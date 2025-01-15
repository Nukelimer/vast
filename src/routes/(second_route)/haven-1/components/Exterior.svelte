<script>
	import Parallax from '../../../../component/reusable/Parallax.svelte';
	import ThumbnailGallery from '../../../../component/reusable/ThumbnailGallery.svelte';
</script>

<div class="pb-16 bg-[#ECE8E3]">
	<h3 class="text-4xl text-center font-semibold pb-16">The exterior</h3>

	<img src="/images/haven_1/Exterior-mobile.png" alt="exterior" class="mb-6" />

	<ThumbnailGallery
		items={[
			{
				id: 1,
				thumbnail: '/images/haven_1/launching_2025.png',
				image: '/images/haven_1/launching_2025.png',
				description: [
					'haven-1',
					'Launching in 2025, Haven-1 passengers will experience up to 10 days in space and take part in the pioneering era of artificial gravity testing for the establishment of humanity’s permanent place in space.'
				]
			},
			{
				id: 2,
				thumbnail: '/images/haven_1/dragon_docking.png',
				image: '/images/haven_1/dragon_docking.png',
				description: [
					'Haven-1 & Dragon Docking',
					'Haven-1 utilizes SpaceX’s proven reliability with the brand’s Dragon spacecraft.'
				]
			},
			{
				id: 3,
				thumbnail: '/images/haven_1/solar.png',
				image: '/images/haven_1/solar.png',
				description: [
					'HAVEN-1 SOLAR PANELS',
					'Haven-1 has 12 solar panels provided by leading Spanish manufacturer, DHV. Each solar panel is capable of producing 1.1 kilowatts (kW) of power for total peak power of 13.2 kW across the vehicle. '
				]
			}
		]}
	/>

	<div class="px-4 mt-6">
		<h3 class="md:w-1/2 w-full z-10 mb-16 font-semibold text-[#FA542F] text-lg">
			Our focus this decade is to win the NASA Commercial LEO Destination (CLD) contract and build
			the successor to the International Space Station (ISS). To win, we will demonstrate that we
			can build and operate the world’s first commercial space station Haven-1.
		</h3>

		<Parallax
			parallaxImg="/images/haven_1/ISS.png"
			circleImg="/images/haven_1/parallax_image.png"
			hideIcon="hidden"
			styleOveride="md:-top-14 -top-16  max-w-[400px] ml-1 md:max-w-[550px]"
		/>
	</div>

	<div class="bg-white w-[90%] mx-auto">
		<div class=" p-6 w-full flex flex-col">
			<h3 class="mb-10 font-semibold text-4xl">Haven-1 Announcement with SpaceX</h3>
			<a href="https://www.spacex.com/updates#vast-announcement" class="  w-full p-5">
				<button
					class="group relative inline-block overflow-hidden border border-zinc-500 px-8 py-3 font-medium w-full"
				>
					<span
						class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-y-0 transform bg-zinc-300 opacity-90 transition-all duration-500 ease-out group-hover:w-full"
					></span>
					<span class="relative group-hover:text-white">Read Now</span>
				</button>
			</a>
		</div>
	</div>
</div>
