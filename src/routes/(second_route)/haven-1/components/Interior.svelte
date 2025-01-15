<script>
	const specData = [
		{
			name: 'Diameter',
			value: '4.4 m'
		},
		{
			name: 'Height',
			value: '10.1 m'
		},
		{
			name: 'Habitable Volume',
			value: '45 m3'
		},
		{
			name: 'Pressurized Volume',
			value: '80 m3'
		},
		{
			name: 'Mass',
			value: '14000 kg'
		},
		{
			name: 'Power',
			value: '13,200 w'
		},
		{
			name: 'Orbit',
			value: '51.6, 425km'
		},
		{
			name: 'Crew Capacity',
			value: '4'
		}
	];
</script>

<section class="bg-[#ECE8E3]">
	<h2 class="text-4xl py-16 text-center font-semibold ">The Interior</h2>
	<img
		src={'/images/haven_2/Interior.png'}
		alt={'Interior'}
		class="  w-full h-full min-w-[300px] object-cover md:object-fill px-6"
	/>

	<div class="md:hidden">
		<div class=" px-4">
			<h3 class=' text-4xl font-semibold my-12 w-1/3 '>Haven-1 Specifications</h3>

			<div class="">
				<ul class="w-full ">
					{#each specData as data}
						<div class="border-t border-white py-4">

                                                        <h3 class="uppercase text-[#FA5530] font-semibold text-sm">{data.name}</h3>
						<h4 class="font-bold mt-2 text-3xl">{data.value}</h4>
                                                </div>
					{/each}
				</ul>
			</div>
		</div>
	</div>



        <div class="md:flex flex-col hidden">
		<div class=" px-4 flex gap-12 my-40">
			<div class=" flex-1 flex justify- flex-col ">

                                <h3 class=' text-6xl font-semibold w-1/2  '>Haven-1 Specifications</h3>

                                <img src="/images/haven_1/Straight Front.png" alt="Spec" class="my-auto">
                        </div>

			<div class="flex-1">
				<ul class="w-full ">
					{#each specData as data}
						<div class="border-t border-white py-4">

                                                        <h3 class="uppercase text-[#FA5530] font-semibold text-sm">{data.name}</h3>
						<h4 class="font-bold mt-2 text-3xl md:text-5xl">{data.value}</h4>
                                                </div>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
