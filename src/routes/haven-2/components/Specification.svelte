<script>
	import ThumbnailGallery from "../../../component/reusable/ThumbnailGallery.svelte";

	const specData = [
		{
			feature: '',

			pod_1: '/images/haven_2/_Haven-1_pod.png',
			pod_2: '/images/haven_2/_Haven-2_pod.png'
		},

		{
			feature: '',
			haven_1: 'Haven-1 (Q4 2025)',
			haven_2: 'Haven-2 Module (2028)'
		},

		{
			feature: 'DIAMETER',
			haven_1: '4.4 m',
			haven_2: '4.4 m'
		},
		{
			feature: 'LENGTH',
			haven_1: '10.1 m',
			haven_2: '16 m'
		},
		{
			feature: 'DOCKING PORTS',
			haven_1: '1',
			haven_2: '2'
		},
		{
			feature: 'LAUNCHER VEHICLE',
			haven_1: 'SPACEX FALCON 9 REUSABLE',
			haven_2: 'SPACEX FALCON HEAVY'
		},
		{
			feature: 'MASS',
			haven_1: '14,000 kg',
			haven_2: '24,000 kg'
		},
		{
			feature: 'HABITABLE VOLUME',
			haven_1: '45 m3',
			haven_2: '55 m3'
		},
		{
			feature: 'PRESSURIZED VOLUME',
			haven_1: '80 m3',
			haven_2: '127 m3'
		},
		{
			feature: 'CARGO RESUPPLY CAPABLE',
			haven_1: 'NO',
			haven_2: 'YES'
		},
		{
			feature: 'ON-BOARD CONSUMABLES',
			haven_1: '160 CREW DAYS',
			haven_2: '720 CREW DAYS'
		}
	];


const galleryItems = [
  {
    id: 1,
    thumbnail: '/images/haven_2/modular_sm.png',
    image: '/images/haven_2/modular design.png',
    description: [
      'Modular Design',
      'From 2029 to 2030, Vast will launch three additional modules, expanding the station’s volume and payload facilities. Each module will incorporate increasingly advanced and efficient life support technologies.',
    ]},
     {
    id: 2,
    thumbnail: '/images/haven_2/payload_facility.png',
    image: '/images/haven_2/payload_facilities_lg.png',
    description: [
      'Internal Payload Facilities',
      "The design facilitates microgravity research with 120 MDL equivalent internal payload interfaces, 8 m³ of enhanced volume, 40 kW of power, meets NASA's TIM briefings, and allows for international partner modules.",
    ]}
    ,
     {
    id: 3,
    thumbnail: '/images/haven_2/modular_sm.png',
    image: '/images/haven_2/modular design.png',
    description: [
      'External payload facilities',
      "The system features 10 ExPA equivalent external payload sites, 40 kW of payload power, options for international partner modules, and an arm for crawling, vehicle berthing, and payload positioning.",
    ]},
     {
    id: 4,
    thumbnail: '/images/haven_2/cupola.png',
    image: '/images/haven_2/cupola_lg.png',
    description: [
      'CUpola',
      "The design is optimized for external scientific observation, featuring a large 3.8m diameter domed cupola window, six additional viewing windows, and six photography-optimized portholes.",
    ]},
     {
    id: 5,
    thumbnail: '/images/haven_2/eva_sm.png',
    image: '/images/haven_2/eva_lg.png',
    description: [
      'Eva Airlock',
      "Designed to support extravehicular activity with crew airlock, mobility aids, and work fixtures.",
    ]},
     {
    id: 6,
    thumbnail: '/images/haven_2/connnectivity_sm.png',
    image: '/images/haven_2/connectivity_lg.png',
    description: [
      'Connectivity',
      "The SpaceX Starlink Laser Link Internet System features a mesh network in space, providing proven reliable connectivity with gigabit/s speed and low latency.",
    ]},
     {
    id: 7,
    thumbnail: '/images/haven_2/on_modular_sm.png',
    image: '/images/haven_2/on_module_lg.png',
    description: [
      'On module windows',
      "Two domed windows on each Haven-2 module to facilitate earth observation.",
    ]},
     {
    id: 8,
    thumbnail: '/images/haven_2/ida_port.png',
    image: '/images/haven_2/ida_port_lg.png',
    description: [
      'IDA Port',
      "International docking adapter used for Universal docking of most spacecraft.",
    ]}
    
 
 
 
 ]
</script>

<div class="bg-[#2A2C2F] py-28 pb-0 w-full px-1  h-fit">
	<div class="flex justify-between">
		<h2 class="text-4xl font-semibold flex flex-col">
			<span class="text-white">Haven-2 </span>
			<span class="text-[#B3ABA3]">Leveraging our heritage</span>
		</h2>

		<p class="w-1/3 text-white font-semibold">
			To continue crewed operations in LEO well before the ISS is retired, Haven-2 is built on the
			heritage of Haven-1, with key upgrades.
		</p>
	</div>

	<div class="mt-16 hidden md:block">
		{#each specData as { feature, pod_1, pod_2, haven_1, haven_2 }}
			<div
				class="flex justify-around border-b py-6 text-left text-white first-of-type:font-semibold first-of-type:text-2xl first-of-type:border-b-0 mx-8 lg:mx-12"
				id="spec-list"
			>
				{#if pod_1 && pod_2}
					<div class="flex-1 place-self-end  2xl:mr-64 px-4">
						<img src={pod_1} alt="Haven-1 Pod" class="w-32  justify-self-end" />
					</div>
					<div class="flex-1 px-4">
						<img src={pod_2} alt="Haven-2 Pod" class="w-32 mx-auto 2xl:mr-80" />
					</div>
				{:else}
					<div class="flex-1 px-4">{feature}</div>
					<div class="flex-1 px-4">{haven_1}</div>
					<div class="flex-1 px-4">{haven_2}</div>
				{/if}
			</div>
		{/each}
	</div>


	<div class="mt-16 block md:hidden">
		{#each specData as { feature, pod_1, pod_2, haven_1, haven_2 }}
			<div
				class="flex justify-around border-b py-6 text-left text-white first-of-type:font-semibold first-of-type:text-2xl first-of-type:border-b-0 mx-8 lg:mx-12"
				id="spec-list"
			>
				{#if pod_1 && pod_2}
					<div class="flex-1 place-self-end  2xl:mr-64 px-4">
						<img src={pod_1} alt="Haven-1 Pod" class="w-32  justify-self-end" />
					</div>
					
				{:else}
					<div class="flex-1 px-4">{feature}</div>
					<div class="flex-1 px-4">{haven_1}</div>
				{/if}
			</div>
		{/each}
	</div>
	<div class="mt-16 block md:hidden">
		{#each specData as { feature, pod_1, pod_2, haven_1, haven_2 }}
			<div
				class="flex justify-around border-b py-6 text-left text-white first-of-type:font-semibold first-of-type:text-2xl first-of-type:border-b-0 mx-8 lg:mx-12"
				id="spec-list"
			>
				{#if pod_1 && pod_2}
					<div class="flex-1 place-self-end  2xl:mr-64 px-4">
						<img src={pod_1} alt="Haven-1 Pod" class="w-32  justify-self-end" />
					</div>
					
				{:else}
					<div class="flex-1 px-4">{feature}</div>
					<div class="flex-1 px-4">{haven_2}</div>
				{/if}
			</div>
		{/each}
	</div>


	<div class="mt-16">

<ThumbnailGallery items={galleryItems} styles_thumbanail='!top-2 md:!top-6' styles_thumbanail_size='w-20 md:w-[76px] md:h-[42px] min-h-[42px] min-w-[76px]'/>

	</div>

</div>
