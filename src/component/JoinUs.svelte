<script>

	import { ChevronRight } from "lucide-svelte";
	import Button from "./reusable/Button.svelte";

  

        import { onMount, onDestroy } from 'svelte';

        const partnershipData = [
       
        
       [
        '/images/join/image_1.png',
        '/images/join/image_2.png',
        '/images/join/image_3.png'
        ]
        ];
let currentImageIndex = 0;
let imageUrl = partnershipData[0][currentImageIndex];
const intervalId = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % partnershipData[0].length;
    imageUrl = partnershipData[0][currentImageIndex];
}, 3000);


onMount(() => {

})

onDestroy(() => {
 
    clearInterval(intervalId);
});



</script>
<div class="bg-[#2A2C2F] px-6 pt-32 pb-20 border-b border-zinc-700 ">
<div class="text-white md:flex justify-between mb-24 md:mb-12">
		<h2 class="mb-8 text-3xl font-semibold tracking-tight">Types of Missions</h2>

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


        <div class="">
                      
		 <img src={imageUrl} alt="Looping Imagee" class="transition-shadow duration-300 object-cover md:w-full h-[400px] sm:h-[600px] w-full  md:max-h-[35rem] lg:md:h-[65em]  xl:md:max-h-[1000px] mb-12 md:mb-0 " />
                </div>


</div>