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

<div class=" my-16 w-full">
	<img src={img} alt={heading} class="w-full md:aspect-video " />
	<h3 class="text-[#FA542F] mt-4 uppercase text-sm flex items-center">
		{type} <span class="h-[10px] w-[10px] mx-2 bg-[#FA542F]"> </span>
		{formattedDate}
	</h3>
	<h4 class="text-white font-semibold mt-2">{heading}</h4>
</div>
