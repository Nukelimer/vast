<script>
	import { onMount, onDestroy } from 'svelte';

	const partnershipData = [
		{
			head: 'A flight proven partnership',
			logo: '/images/partnership_loop/SpaceX_logo.png',
			launch: 'Launch Partnership',
			body: 'Haven-1 is utilizing SpaceX’s proven reliability with the Falcon 9 launch vehicle and Dragon spacecraft, and marks the first deployment of Starlink‘s laser terminal with gigabit/s speed connectivity aboard a commercial space station.'
		},

		[
			'/images/partnership_loop/Launch.png',
			'/images/partnership_loop/-p.png',
			'/images/partnership_loop/Dragon.png'
		]
	];
	let currentImageIndex = 0;
	let imageUrl = partnershipData[1][currentImageIndex];
	const intervalId = setInterval(() => {
		currentImageIndex = (currentImageIndex + 1) % partnershipData[1].length;
		imageUrl = partnershipData[1][currentImageIndex];
	}, 3000);

	onMount(() => {});

	onDestroy(() => {
		clearInterval(intervalId);
	});

	export let overideStyles = '';
        export let overidePadding = '';
        export let addPadding = '';
           export let rmvPadding = '';
</script>

<div class="pb-32 border-b pt-32 md:pt-6 border-zinc-700 bg-[#2A2C2F] {overideStyles}">
	<div class="relative md:flex md:items-center px-6 {overidePadding}  md:w-full md:overflow-hidden">
		<img
			src={imageUrl}
			alt="Looping Imagee"
			class="transition-shadow duration-300 object-cover md:w-full h-[400px] sm:h-[600px] w-full md:max-h-[35rem] lg:md:h-[65em] xl:md:max-h-[1000px] mb-12 md:mb-0 {rmvPadding}"
		/>
		<div
			class="text-white md:absolute z-10 md:left-10 md:w-[30%] md:h-[90%] md:flex md:flex-col md:justify-between md:p-4 md:bg-opacity-100 md:backdrop-blur-3xl {addPadding}"
		>
			<h3 class="uppercase mb-10 text-xs font-semibold">{partnershipData[0].head}</h3>
			<div class="">
				<img src={partnershipData[0]['logo']} alt="spaceX" class="max-w-[200px] mb-2" />
				<h3 class="text-3xl my-4 font-semibold">{partnershipData[0].launch}</h3>
				<h3 class="text-sm">{partnershipData[0]['body']}</h3>
			</div>
		</div>
	</div>
</div>
