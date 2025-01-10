<script>
	import { browser } from '$app/environment';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { writable } from 'svelte/store';

const reviewData = [
		{
			review:
				'I am excited to work with Vast as they build more opportunities and destinations for more people to travel amongst the stars.',
			name: 'Gwynne Shotwell'
		},
		{
			review:
				'An advantage Vast has over some of its competitors, I believe, is bringing manufacturing of its stations in house',
			name: 'Eric Berger'
		},
		{
			review:
				'The company has made clear its intent is to compete for the second phase of NASA’s Commercial Low Earth Orbit Destinations, or CLD, program as part of the agency’s ISS transition efforts',
			name: 'Space News'
		},
		{
			review:
				'A successor to the International Space Station (ISS). This is the ambition of Vast, the small space company that is on the rise in the United States. Some observers see it as the future SpaceX of orbital stations',
			name: 'Le Figaro'
		},
		{
			review:
				'The station [Haven-1] has a warm, welcoming, uncluttered interior, with a large central window giving occupants a wide view of the Earth.',
			name: 'Air & Cosmos'
		},
		{
			review:
				'Vast’s simple, single-structure Haven-1 space station will be able to launch atop a SpaceX Falcon 9 rocket, the workhorse vehicle that SpaceX has been launching for more than a decade.',
			name: 'CNN'
		},
		{
			review: `A common area would allow passengers to gather and enjoy "breathtaking views" of Earth, while the station's integrated fitness center would provide them with an opportunity to get in a workout hundreds of miles above the surface`,
			name: 'FUTURISM'
		},
		{
			review:
				'...it would mark the first time a commercial rocket company had launched humans to a commercial space station, another milestone in the privatization of space.',
			name: 'The Washington Post'
		},
		{
			review: 'The partnership with SpaceX is the key to making this mission happen.',
			name: 'SARS Technica'
		}
	];
	let isLargeScreen = false;
	if (browser) {
		const updateScreenSize = () => {
			isLargeScreen = window.innerWidth >= 768; // Adjust for md breakpoint
		};
		window.addEventListener('resize', updateScreenSize);
		updateScreenSize();
	}

	// Number of cards visible
	let numberVal = isLargeScreen ? 3 : 1;

	// Adjust on resize
	if (browser) {
		window.addEventListener('resize', () => {
			numberVal = window.innerWidth >= 768 ? 3 : 1;
		});
	}

	

	const currentIndex = writable(0); // Start at first slide

	function nextSlide() {
		currentIndex.update((n) => Math.min(n + numberVal, reviewData.length - numberVal));
	}

	function prevSlide() {
		currentIndex.update((n) => Math.max(n - numberVal, 0));
	}
</script>

<div class="flex flex-col items-center justify-center mt-20 bg-[#2A2C2F]">
	<div class="relative w-full overflow-hidden">
		<div
			class="flex transition-transform duration-500 mx-3"
			style="transform: translateX(calc(-100% * {$currentIndex} / {numberVal}))"
		>
			{#each reviewData as review}
				<div
					class="min-w-full md:min-w-[calc(100%/3)] flex flex-col min-h-[400px]  md:mx-4 items-center justify-between bg-[#B3ABA3] p-4"
				>
					<p class="text-lg mt-6 text-gray-800 font-semibold">"{review.review}"</p>
					<p class="mt-4 text-sm uppercase tracking-wider text-gray-800 font-semibold">
						{review.name}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex items-center justify-between w-full mt-12 px-16">
		<div class="flex gap-2 mt-4 opacity-0 md:opacity-100">
			{#each reviewData as _, i}
				<button
					type="button"
					class="w-2 h-2 cursor-pointer rounded-full focus:outline-none"
					class:bg-[#B3ABA3]={$currentIndex === i}
					class:bg-gray-700={$currentIndex !== i}
					aria-label="Go to slide {i + 1}"
					on:click={() => currentIndex.set(i)}
				></button>
			{/each}
		</div>

		<div class="flex items-center gap-4 mt-6">
			<button class="bg-[#B3ABA3] p-2 hover:bg-[#B3ABA3]/50" on:click={prevSlide}>
				<ChevronLeft size={15} color="white" />
			</button>
			<button class="bg-[#B3ABA3] p-2 hover:bg-[#B3ABA3]/50" on:click={nextSlide}>
				<ChevronRight size={15} color="white" />
			</button>
		</div>
	</div>
</div>





