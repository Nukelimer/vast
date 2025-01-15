<script>
	export let styles_thumbanail = '';
	export let styles_thumbanail_size = '';
	export let items = [];
	let activeItem = items[0]; 

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

<div class=" relative flex flex-col items-center  w-full mx-auto">
	<div class="relative w-full flex items-center justify-center">
		<img
			src={activeItem.image}
			alt={activeItem.description}
			class={`w-full h-full object-cover min-h-[500px]  shadow-md transition-opacity duration-500 ${transitioning ? 'opacity-95' : 'opacity-100'}`}
		/>
		<div
			class="select-none absolute flex pl-24 items-start   w-full  text-white "
		>
			
			<p class="font-owner min-w-[100px] max-w-[500px] font-semibold text-6xl">{activeItem.description[1]}</p>
		</div>
	</div>

	<div
		class=" flex flex-col justify-center items-center h-full my-auto gap-3 select-none absolute right-5  {styles_thumbanail}"
	>
		{#each items as item (item.id)}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class=" border overflow-hidden shadow-md transition-transform transform hover:scale-105 {item.id ===
				activeItem.id
					? 'border-blue-100'
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
