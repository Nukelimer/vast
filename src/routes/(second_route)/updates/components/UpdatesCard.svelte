<script>
	export let img = '';
	export let type = '';
	export let heading = '';

	const date = new Date();
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const formattedDate = date.toLocaleDateString('en-US', options);
</script>

<div class=" my-16 w-full mx-auto ">
	<img src={img} alt={heading} class="w-full md:aspect-video hover:scale-105 transition-all delay-300 cursor-pointer " />
	<h3 class="text-[#FA542F] mt-4 uppercase text-sm md:text-2xl py-8 flex items-center">
		{type} <span class="h-[10px] w-[10px] md:h-[25px] md:w-[25px] mx-2 md:mx-6 bg-[#FA542F]"> </span>
		{formattedDate}
	</h3>
	<h4 class="text-black font-semibold mt-2 md:text-5xl">{heading}</h4>
</div>
