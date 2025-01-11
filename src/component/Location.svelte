<script>
	import { ChevronRight } from 'lucide-svelte';
	import Button from './reusable/Button.svelte';
	import LocationCard from './LocationCard.svelte';

	// export let img = '';
	// 	export let heading = '';
	// 	export let url = '';
	// 	export let mapLink = '';
	// 	export let tasks = '';
</script>

<div class="bg-[#2A2C2F] px-6 pt-32 pb-20 border-b border-zinc-700">
	<div class="text-white md:flex justify-between mb-24 md:mb-12">
		<h2 class="mb-8 text-4xl font-semibold tracking-tight">Locations</h2>

		<div class="md:w-1/3">
			<p class="text-left mb-6">
				Vast has multiple facilities across the US. Our HQ in Long Beach, CA, spans 165,000 sq ft,
				alongside a 25,000 sq ft facility in Hawthorne and a test site at Mojave.
			</p>

			<a href="/haven-1" class="hidden">
				<span class="flex items-center cursor-pointer">
					<ChevronRight color="#ff5623" />

					<Button text="Find out more" /></span
				></a
			>
		</div>
	</div>


















	<div class=" text-white  mb-20 md:relative">
		<img src="/images/location/Long_Beach.png" alt="{'headquater img'}" class="w-full bg-cover" />
		<div class=" md:w-[96%]  md:flex md:flex-col lg:flex-row md:justif right-[16px]  md:absolute bottom-6    md:backdrop-blur-lg md:py-6">
			<div class=""><h3 class="font-bold text-xl mt-8 mb-3 md:px-6 md:mt-0 uppercase">Headquarters</h3></div>
<div class="md:flex item-center justify-center md:h-full  md:w-full ">

	
			<p class="w-2/3 md:mb-3 md:border-l border-zinc-400 md:w-1/3 mb-4 md:text-sm  max-w-[200px] md:pl-5  ">Design, Manufacturing, Integration, Mission Operations & Training</p>
			<p class="w-1/3  md:mb-2 md:border-l border-zinc-400 md:w-1/3 md:text-sm  max-w-[200px] md:pl-5">2851 Orange Avenue  Long Beach, CA 90806</p>

			<div class=" md:border-l border-zinc-400 md:w-1/3 md:text-sm  max-w-[250px] md:pl-5 md:">
				<div class="flex items-center w-full">
				<ChevronRight color="white" size="20" class='' />
				<Button text={'Watch the flythrough video'} styles='text-nowrap' />
			</div>
			<a href={'https://maps.app.goo.gl/GHnYvx6THf8ysPceA'} class="flex items-center">
				<ChevronRight color="white" size="20" />
				<Button text={'Google Maps'} />
			</a>
			</div>
</div>
		</div>
	</div>
































	<div class="md:flex md:gap-8">
		<LocationCard
			img="/images/location/manufacturiing.png"
			heading="Manufacturing"
			address={'12624 Daphne Avenue Hawthorne, CA 90250'}
			btnText="Google Maps"
			mapLink="https://maps.app.goo.gl/2hLawTncgBuU8kkp7"
		/>
		<LocationCard
			img="/images/location/testing.png"
			heading="Environmental Testing"
			address={'Mojave Air and Space Port 1413 Flight Line Mojave, CA 93501'}
			btnText="Google Maps"
			mapLink="https://maps.app.goo.gl/wYwkXqz29ZiZabGm7"
		/>
		<LocationCard
			img="/images/location/government_affair.png"
			heading="Manufacturing"
			address={'1341 G Street NWSuite 200 Washington, DC 20005'}
			btnText="Google Maps"
			mapLink="https://maps.app.goo.gl/BhkoJjwuh5wHFK6s9"
		/>
	</div>
</div>
