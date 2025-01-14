<script>
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
			class="select-none absolute bottom-2 left-8 backdrop-blur-3xl text-white w-1/2 md:w-[20%] px-3 py-4 md:py-8 text-sm"
		>
			<p class="text-sm uppercase flex items-center gap-2 font-owners font-semibold mb-6">
				<span class="h-2 w-2 bg-white"></span>
				{activeItem.description[0]}
			</p>
			<p class="font-owner">{activeItem.description[1]}</p>
		</div>
	</div>

	<div
		class="thumbnails-container flex flex-col gap-3 select-none absolute right-5 top-[20%] {styles_thumbanail}"
	>
		{#each items as item (item.id)}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class=" border-2 overflow-hidden shadow-md transition-transform transform hover:scale-105 {item.id ===
				activeItem.id
					? 'border-blue-500'
					: 'border-transparent'}"
				on:click={() => handleImageChange(item)}
				on:keydown={(event) => event.key === 'Enter' && handleImageChange(item)}
				tabindex="0"
				role="button"
				aria-label="Click me"
			>
				<img
					src={item.thumbnail}
					alt={item.description}
					class="w-20 md:w-40 md:h-20 min-h-[42px] min-w-[76px] object-cover cursor-pointer {styles_thumbanail_size}"
				/>
			</div>
		{/each}
	</div>
</div>
