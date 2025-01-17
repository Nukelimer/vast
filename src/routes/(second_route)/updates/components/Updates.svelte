<script>
	import UpdatesCard from "./UpdatesCard.svelte";

	


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

<div class="   mx-auto flex  flex-col w-full justify-center">
	

	<div class=" mx-auto w-full 0 ">
		{#each data as x}
			<UpdatesCard img={x.img} heading={x.heading} type={x.type} />
		{/each}
	</div>

	<button class=" px-4 py-2 bg-white mb-12 text-black">More updates</button>
</div>
