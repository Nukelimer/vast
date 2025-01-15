<script>
	import { ChevronRight } from "lucide-svelte";

	export let styles_thumbanail = '';
	export let styles_thumbanail_size = '';
	export let items = [];
	let activeItem = items[0]; // Default to the first image

	const setActiveItem = (item) => {
		activeItem = item;
	};

	let transitioning = false;
	const handleImageChange = (item) => {
		if (item !== activeItem) {
			transitioning = true;
			setTimeout(() => {
				setActiveItem(item);
				transitioning = false;
			}, 200);
		}
	};
</script>

<div class=" relative flex flex-col items-center w-full mx-auto">
	<div class="relative w-full flex items-center justify-center">
		<img
			src={activeItem.image}
			alt={activeItem.description}
			class={`w-full h-full object-cover min-h-[500px]  shadow-md transition-opacity duration-500 ${transitioning ? 'opacity-95' : 'opacity-100'}`}
		/>
		<div
			class="select-none absolute bottom-12 left-8 backdrop-blur-3xl text-white w-1/2 md:w-[30%] px-3 py-4 md:py-8 text-sm"
		>
			<p class="text-sm uppercase flex items-center gap-2 font-owners font-semibold mb-6">
				<span class="h-2 w-2 bg-white"></span>
				{activeItem.description[0]}
			</p>
			<p class="font -owner">{activeItem.description[1]}</p>
			<a href="/haven-1-lab" class="flex item-center gap-4 mt-3"><ChevronRight color='red' size='20' /> Learn more</a>
		</div>
	</div>

	
</div>
