<script>
	import Marquee from 'svelte-fast-marquee';
	import Reviews from './Reviews.svelte';

	const logoMarguee = [
		'/images/in-progress/_tc.png',
		'/images/in-progress/_twp.png',
		'/images/in-progress/cnbc.png',
		'/images/in-progress/cnn.png',
		'/images/in-progress/Engadget.png',
		'/images/in-progress/Payload.png',
		'/images/in-progress/reuters.png'
	];

	

	const reviewData = [
		{
			review:
				'I am excited to work with Vast as they build more opportunities and destinations for more people to travel amongst the stars.',
                                name: 'Gwynne Shotwell'
		}, {
			review:
				'An advantage Vast has over some of its competitors, I believe, is bringing manufacturing of its stations in house',
                                name: 'Eric Berger'
		}, {
			review:
				'The company has made clear its intent is to compete for the second phase of NASA’s Commercial Low Earth Orbit Destinations, or CLD, program as part of the agency’s ISS transition efforts',
                                name: 'Space News'
		}, {
			review:
				'A successor to the International Space Station (ISS). This is the ambition of Vast, the small space company that is on the rise in the United States. Some observers see it as the future SpaceX of orbital stations',
                                name: 'Le Figaro'
		}, {
			review:
				'The station [Haven-1] has a warm, welcoming, uncluttered interior, with a large central window giving occupants a wide view of the Earth.',
                                name: 'Air & Cosmos'
		}, {
			review:
				'Vast’s simple, single-structure Haven-1 space station will be able to launch atop a SpaceX Falcon 9 rocket, the workhorse vehicle that SpaceX has been launching for more than a decade.',
                                name: 'CNN'
		}, {
			review:
				`A common area would allow passengers to gather and enjoy "breathtaking views" of Earth, while the station's integrated fitness center would provide them with an opportunity to get in a workout hundreds of miles above the surface`,
                                name: 'FUTURISM'
		}, {
			review:
				'...it would mark the first time a commercial rocket company had launched humans to a commercial space station, another milestone in the privatization of space.',
                                name: 'The Washington Post'
		}, {
			review:
				'The partnership with SpaceX is the key to making this mission happen.',
                                name: 'SARS Technica'
		}
	];
</script>

<div class="bg-[#2A2C2F] py-16 border-b border-zinc-700">
	<h2 class="text-center pb-16 text-3xl text-white font-semibold">In the Progress</h2>

	<Marquee speed={50} direction="left" pauseOnHover="true">
		{#each logoMarguee as data}
			<img src={data} alt="Pictures" class="max-h-10 filter brightness-0 px-10 invert" />
		{/each}
	</Marquee>
        <Reviews/>
</div>



