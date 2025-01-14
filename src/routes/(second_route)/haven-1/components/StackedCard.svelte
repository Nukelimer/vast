<script>
	import { ChevronDownIcon } from 'lucide-svelte';

	const cardData = [
		{
			text_name: 'haven-1',
			text_name_lg: 'Features',
			img: '/images/haven_1/card/top_feature.png'
		},
		{
			text_name: '2-week missions',

			img: '/images/haven_1/card/2_weeks.png'
		},
		{
			text_name: '45 m³ habitable volume',

			img: '/images/haven_1/card/habitable.png'
		},
		{
			text_name: 'Personal crew quarters',

			img: '/images/haven_1/card/personal_crew.png'
		},
		{
			text_name: '1.1 domed window',

			img: '/images/haven_1/card/domed_window.png'
		},
		{
			text_name: 'Deployable communal table',

			img: '/images/haven_1/card/communal_table.png'
		},
		{
			text_name: 'SpaceX Starlink connectivity',

			img: '/images/haven_1/card/starlink.png'
		}
	];
</script>

<div class="max-w-[100%] flex  flex-col overflow-clip mx-auto">
	{#each cardData as data}
		{#if data.text_name_lg}
			<div class="sticky w-full h-screen top-0 inline-block  box-border">
				<div class=" h-screen relative">
					<div class="absolute flex flex-col justify-center h-full items-center w-full">
						<h2 class="text-5xl capitalize font-semibold text-white">{data.text_name}</h2>
						<h2 class=" text-6xl lg:text-[14rem] leading-[0.8] text-white font-bold mb-5">
							{data.text_name_lg}
						</h2>
						<ChevronDownIcon color="white" size="55" />
					</div>

					<img src={data.img} alt={data.text_name} class=" max-h-[98%] w-full object-cover md:object-fill h-full" />
				</div>
			</div>
		{:else}
			<div class="sticky w-full h-screen top-0 inline-block  box-border">
				<div class=" h-full relative">
					<h2
						class=" absolute flex flex-col justify-center h-full  ml-16 w-1/2 md:w-full text-2xl md:text-5xl capitalize font-semibold text-white text-left "
					>
						{data.text_name} 
					</h2>

					<img src={data.img} alt={data.text_name} class="  w-full h-full min-w-[300px] object-cover md:object-fill" />
				</div>
			</div>
		{/if}
	{/each}
</div>
