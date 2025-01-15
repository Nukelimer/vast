<script>
	import { Tabs, TabItem } from 'flowbite-svelte';

	const timelineData = [
		{
			name: 'Training',
			last_timeline_img: '/images/timeline/Training.png',
			large_img: '/images/timeline/training_pilot.png'
		},
                {
			name: 'Launch',
			last_timeline_img: '/images/timeline/Launch.png',
			large_img: '/images/timeline/Launch-pic.png'
		},
                {
			name: 'In Orbit',
			last_timeline_img: '/images/timeline/Orbit.png',
			large_img: '/images/timeline/three_people.png'
		},{
			name: 'Homecoming',
			last_timeline_img: '/images/timeline/Return.png',
			large_img: '/images/timeline/baloon.png'
		}
	];
</script>


<section class="bg-[#2A2C2F] ">
<div class=" w-[80%] mx-auto">
	<div class=" flex flex-col md:flex-row text-white pt-16 pb-24 ">
		<h3  class="flex-1 text-4xl capitalize font-semibold mb-8 md:mb-0">Mission timeline</h3>
		<p class="flex-1 text-balance">
			Four crew members will visit Haven-1 aboard a SpaceX Dragon spacecraft for a 2 week mission
			designed for both space agencies and private individuals. Each mission is available per seat
			or as a full, four-person crew mission, and includes opportunities to conduct advanced
			science, research, and in-space manufacturing.
		</p>
	</div>

	
<div class="hidden md:block">

        <Tabs
        tabStyle="full "
        defaultClass="flex  divide-x rtl:divide-x-reverse border border-gray-700 shadow dark:divide-gray-700 mx-auto"
        >
        {#each timelineData as data }
                <TabItem
                        activeClasses="bg-[#555659] w-full h-full text-white uppercase"
                        inactiveClasses="h-full w-full py-4 text-white uppercase bg-transparent"
                        class="w-full transition-all duration-500 ease-in-out"
                        open
                >
                        <span slot="title">{data.name}</span>
        
                        <!-- Animated content -->
                        <div class="transition-opacity duration-500 ease-in-out open:opacity-100">
                                <h1 class="text-[#393B3E] md:text-7xl lg:text-9xl font-semibold">{data.name}</h1>
                                <img src="{data.last_timeline_img}" alt="timeline" />
                                <div class="relative flex">
                                        <img src="{data.large_img}" alt="timeline" class="my-12 h-full w-full overflow-hidden" />
                                        <div class="h-[80%] ml-4 w-full flex items-end  absolute">
                                                <p class="py-4 text-sm px-8 backdrop-blur-3xl uppercase font-semibold text-white flex items-center gap-4">
                                                        <span class="h-2 w-2 bg-white"></span>{data.name}
                                                </p>
                                        </div>
                                </div>
                        </div>
                </TabItem>
        {/each}
        </Tabs>

</div>


<div class="block md:hidden py-16">



        <img src="/images/timeline/mobile_timeline.png" alt="">
</div>


</div>
</section>