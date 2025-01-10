<script>
	import { ChevronLeft, ChevronRight, Plus } from 'lucide-svelte';
	import Button from './reusable/Button.svelte';
	import Partnership from './Partnership.svelte';
	const missionDetails = [
		{
			category: 'Government astronaut missions',
			img: '/images/mission/government.png',
			points: [
				'Flight opportunities for US/sovereign astronauts',
				'Unparalleled microgravity innovation laboratory',
				'Partner opportunities for local industry'
			]
		},
		{
			category: 'Private astronaut missions',
			img: '/images/mission/private.png',
			points: [
				'Join a 2 week mission to space',
				'Experience the most capable human-centric space habitat',
				'Contribute to science that benefits Earth and future space exploration'
			]
		},
		{
			category: 'Payload missions',
			img: '/images/mission/payout.png',
			points: [
				'Conduct research and in-space manufacturing',
				'Always-on data and video monitoring',
				'Includes both crewed and autonomous operations'
			]
		}
	];
</script>

<div class="bg-[#2A2C2F] py-14 md:pb-0 px-6 ">
	<div class="text-white md:flex justify-between mb-24 md:mb-12">
		<h2 class="mb-8 text-3xl tracking-tight">Types of Missions</h2>

		<div class="md:w-1/3">
			<p class="text-left mb-6">
				Our Haven-1 station caters to all types of mission objectives. Learn more about the types of
				missions we provide.
			</p>

			<a href="/haven-1" c>
				<span class="flex items-center cursor-pointer">
					<ChevronRight color="#ff5623" />

					<Button text="Find out more" /></span
				></a
			>
		</div>
	</div>

	<div class=" md:hidden">
		{#each missionDetails as data}
			<div class="bg-white text-black my-10">
				<img src={data.img} alt={data.category} class="md:aspect-square md:object-cover" />

				<h2 class="px-6 mt-12 mb-6 text-2xl font-semibold">{data.category}</h2>
				<div class="flex flex-col space-y-2 px-6 pb-16">
					{#each data.points as point}
						<div class="flex md:items-start space-x-2 md:space-x-5">
							<span class="block mt-2 md:mt-2 w-[6px] h-[6px] min-w-[6px] bg-black"></span>

							<span class="text-base inline-block text-gray-800">{point}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="relative hidden md:flex gap-12 md:pb-0 w-full">
		{#each missionDetails as data}
			<div class="relative group flex justify-center items-center ">
				<!-- Image -->
				<h2 class="mt-12 mb-6 text-2xl font-semibold absolute text-white">{data.category}</h2>
				<img
					src={data.img}
					alt={data.category}
					class="md:aspect-square md:object-cover transition-transform duration-500"
				/>

				<!-- Icons -->
				<div class="absolute inset-0 flex justify-between items-between pointer-events-none">
					<!-- Top-Left Icon -->
					<div
						class="absolute top-0 left-0 transform translate-x-0 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-full group-hover:-translate-y-full transition-transform duration-500"
					>
						<Plus size={25} strokeWidth={0.5} color="white" />
					</div>
					<!-- Top-Right Icon -->
					<div
						class="absolute top-0 right-0 transform translate-x-0 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500"
					>
						<Plus size={25} strokeWidth={0.5} color="white" />
					</div>
					<!-- Bottom-Left Icon -->
					<div
						class="absolute bottom-0 left-0 transform translate-x-0 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-full group-hover:translate-y-full transition-transform duration-500"
					>
						<Plus size={25} strokeWidth={0.5} color="white" />
					</div>
					<!-- Bottom-Right Icon -->
					<div
						class="absolute bottom-0 right-0 transform translate-x-0 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-500"
					>
						<Plus size={25} strokeWidth={0.5} color="white" />
					</div>
				</div>

				<!-- Overlay Text and Content -->
				<div
					class="absolute inset-0 bg-white bg-opacity-100 text-white md:text-black flex flex-col justify-center px-6 pb-16 opacity-0 translate-y-full transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0 overflow-y-hidden"
				>
					<h2 class="mt-12 mb-6 text-2xl font-semibold">{data.category}</h2>
					<div class="flex flex-col space-y-2">
						{#each data.points as point}
							<div class="flex md:text-black items-start md:items-center space-x-2">
								<span class="block w-[6px] h-[6px] min-w-[6px] bg-white md:bg-black"></span>
								<span class="text-base md:text-black text-gray-200">{point}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
