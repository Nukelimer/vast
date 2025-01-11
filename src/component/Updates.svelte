<script>
	import UpdatesCard from './reusable/UpdatesCard.svelte';

	const data = [
		{
			img: '/images/updates/announce deal.png',
			heading:
				'Vast Announces Deal with SpaceX to Launch Two Human Spaceflight Missions to the International Space Station',
			type: 'Press Release'
		},
		{
			img: '/images/updates/czech.png',
			heading:
				' Czech Ministry of Transport Signs Memorandum of Understanding (MoU) with Vast to Partner on Engagement with Czech Space Industry',
			type: 'Press Release'
		},

		{
			img: '/images/updates/ISS.png',
			heading:
				' Vast Announces Haven-2, Its Proposed Space Station Designed To Succeed The International Space Station (ISS)',

			type: 'Press Release'
		}
	];
</script>

<div class=" bg-[#2A2C2F] px-6 pb-40 border border-zinc-700">
	<h2 class="pt-20 pb-16 text-white text-3xl font-semibold">Updates</h2>

	<div class="md:flex gap-6 item-center">
		{#each data as x}
			<UpdatesCard img={x.img} heading={x.heading} type={x.type} />
		{/each}
	</div>

	<button class="bg-white text-black px-4 py-2">More updates</button>
</div>
