<script>
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import Button from './reusable/Button.svelte';
const missionDetails = [
  {
    category: "Government astronaut missions",
    img:'/images/mission/government.png',
    points: [
      "Flight opportunities for US/sovereign astronauts",
      "Unparalleled microgravity innovation laboratory",
      "Partner opportunities for local industry"
    ]
  },
  {
    category: "Private astronaut missions",
    img:'/images/mission/private.png',
    points: [
      "Join a 2 week mission to space",
      "Experience the most capable human-centric space habitat",
      "Contribute to science that benefits Earth and future space exploration"
    ]
  },
  {
    category: "Payload missions",
    img:'/images/mission/payout.png',
    points: [
      "Conduct research and in-space manufacturing",
      "Always-on data and video monitoring",
      "Includes both crewed and autonomous operations"
    ]
  }
];


</script>

<div class="bg-[#2A2C2F] text-white py-14 px-6">
	<div class=" md:flex justify-between">
		<h2 class="mb-8 text-3xl tracking-tight">Types of Missions</h2>

		<div class='md:w-1/3'>
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



        <div class="">
{#each missionDetails as data }
        <div class="">

                <img src="{data.img}" alt="{data.category}">
                <h2>{data.category}</h2>
                
        </div>
{/each}

        </div>
</div>
