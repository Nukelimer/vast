<script>
	const timelineData = [
		{
			year: '2028',
			name: 'Haven Module',
			crew: 'Crew:  4 + 4 handover',
			station_poower: ' Station Power: 9.8 KW',
			payload_power: 'Payload Power: 2 KW',
			img: '/images/haven_2/timeline/haven.png'
		},

		{
			year: '+180 Days',
			name: '2-module configuration ',
			crew: 'Crew:  4 - 8',
			station_poower: 'STATION POWER: 19.6 KW',
			payload_power: 'PAYLOAD POWER: 4 KW',
			img: '/images/haven_2/timeline/2_module.png'
		},
		{
			year: '+180 Days',
			name: '3-module configuration ',
			crew: 'Crew:  4 - 8',
			station_poower: 'STATION POWER: 29 KW',
			payload_power: 'PAYLOAD POWER: 8 KW',
			img: '/images/haven_2/timeline/3_module.png'
		},
		{
			year: '2030',
			name: '4-module configuration ',
			crew: 'Crew:  4 - 8',
			station_poower: 'STATION POWER: 39 KW',
			payload_power: 'PAYLOAD POWER: 12 KW',
			img: '/images/haven_2/timeline/4_module.png'
		},

		{
			year: '2030',
			name: 'Haven Core ',
			crew: 'Crew Volume:  70 M3',
			station_poower: 'CORE MODULE POOWER: 7.3 KW',
			payload_power: 'EXTERNAL PAYLOAD ACCOMMODATIONS: 10',
			img: '/images/haven_2/timeline/haven.png'
		},
		{
			year: '+180 DAys',
			name: '5 module configuration. ',
			crew: 'Crew:  FLEXIBILITY',
			station_poower: 'STATION POOWER: 45 KW',
			payload_power: 'PAYLOAD POWER: 20 KW',
			img: '/images/haven_2/timeline/5_module.png'
		},
		{
			year: '2030',
			name: '9 module configuration. ',
			crew: 'Crew:  510 m3',
			station_poower: 'STATION POOWER: 86 KW',
			payload_power: 'PAYLOAD POWER: 86 KW',
			img: '/images/haven_2/timeline/9_module.png'
		}
	];
</script>

<div class="flex sm:hidden flex-col md:flex-row relative bg-[#2A2C2F] text-white">
	<div class="md:w-1/3 p-8 flex flex-col justify-center md:h-screen mb-24 bg-[#2A2C2F] z-10">
		<h1 class="text-4xl font-bold mb-4">Timeline</h1>
		<p class="text-lg leading-relaxed">
			Starting in 2028, Haven-2 Modules will launch approximately every 6 months, with a final
			station configuration slated for 2032.
		</p>
	</div>

	<div class="md:w-2/3 overflow-y-hidden flex flex-col items-center justify-center p-8">
		{#each timelineData as data}
			<div class="space-y-8 justify-center flex item-center mb-16 gap-28">
				<h3 class=" place-self-end font-semibold mt-60 uppercase text-[#B3ABA3] text-xs text-nowrap">
					{data.year}
				</h3>

				<div
					class="flex flex-col place-self-end items-center first-of-type:-translate-x-8 justify-center absolute left-[40%] my-12"
				>
					<span class=" w-[2px] bg-red-400 h-[275px]"></span>
					<span class="w-[15px] h-[15px] bg-red-400 mt-6 !z-20"></span>
				</div>
				<div class="  my-auto place-self-end md:place-self-end text-xs">
					<img src={data.img} alt={data.name} class="w-full max-w-[150px] rounded-lg" />
					<p class="text-lg font-bold mb-3">{data.name}</p>
					<ul class="text-sm space-y-1 text-xs">
						<li>{data.crew}</li>
						<li>{data.station_poower}</li>
						<li>{data.payload_power}</li>
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="relative pt-16 sm:flex flex-col bg-[#2a2c2f] hidden">
	<div class="absolute top-1/2 ml-12 text-white">
		<h1 class="text-4xl font-bold mb-4">Timeline</h1>
		<p class="text-lg w-1/3 leading-relaxed">
			Starting in 2028, Haven-2 Modules will launch approximately every 6 months, with a final
			station configuration slated for 2032.
		</p>
	</div>
	{#each timelineData as data}
		<div class="">
			<div class="flex h-96 justify-center gap-2">
				<div class="  flex-1"><h3 class=" place-self-end font-semibold mt-[11.7rem] uppercase text-[#B3ABA3] text-xs text-nowrap">
					{data.year}
				</h3></div>
				<div class="flex flex-col items-center justify-center gap-4 text-white w-16">
					<div class="border-l border-red-400 flex-1"></div>
					<div class="bg-red-400 w-5 h-5"></div>
					<div class="border-l border-red-400 flex-1"></div>
				</div>
				<div class=" flex-1">
					<div class=" mt-8 text-xs text-white">
						<img src={data.img} alt={data.name} class="w-full max-w-[150px] rounded-lg" />
						<p class="text-lg font-bold mb-3">{data.name}</p>
						<ul class="text-sm space-y-1">
							<li>{data.crew}</li>
							<li>{data.station_poower}</li>
							<li>{data.payload_power}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>