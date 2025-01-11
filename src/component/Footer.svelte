<script>
	import { Video } from 'flowbite-svelte';
	import { Plus } from 'lucide-svelte';
	let isScaled = false;
	let isHovered = false;

	function handleMouseEnter() {
		isHovered = true;
		isScaled = true;
	}

	function handleMouseLeave() {
		isHovered = false;
		setTimeout(() => {
			if (!isHovered) {
				isScaled = false;
			}
		}, 400);
	}

	const footerData = [
		{
			name: 'Contact',
			info: [
				{
					name: '2851 Orange Avenue Long Beach, CA 90806 USA',
					link: 'https://maps.app.goo.gl/sMTDMq9nxzFLnZow5'
				},
                                {
					name: '+1 (310) 220-0300',
					link: 'tel:+13102200300'
				},
                                  {
					name: 'info@vastspace.com',
					link: 'mailto:info@vastspace.com'
				}
			]
		},

                {
			name: 'Space Stations',
			info: [
				{
					name: 'Haven-1',
					link: '/haven-1'
				},
                                {
					name: 'Haven-2',
					link: '/haven-2'
				},
                                  {
					name: 'Roadmap',
					link: '/roadmap'
				},
                                 {
					name: 'Haven-1 Lab',
					link: '/haven-1-lab'
				}
			]
		}

                ,

                {
			name: 'About Vast',
			info: [
				{
					name: 'Team',
					link: '/team'
				},
                                {
					name: 'Career',
					link: '/career'
				},
                                  {
					name: 'Updates',
					link: '/updates'
				},
                                 {
					name: 'Contact',
					link: '/contact'
				},
                                ,
                                 {
					name: 'Media Assets',
					link: '/media'
				}
			]
		}
	];
</script>

<footer class=" bg-[#ECE8E3]">
	<div class="relative max-h-[70vh]">
		<Video
			src="/video/flux-vast.mp4"
			autoplay
			loop
			muted
			class="w-full max-w-full h-[60vh] md:h-auto  pointer-events-none object-cover brightness-50"
			trackSrc="flowbite.mp4"
		/>

		<div class=" hidden absolute top-32 text-white w-full">
			<div class=" w-full flex justify-around">
				<Plus size={`${isScaled ? 40 : 25}`} strokeWidth={0.5} color="white" class="mr-12" />
				<Plus size={`${isScaled ? 40 : 25}`} strokeWidth={0.5} color="white" class="ml-12" />
			</div>

			<div class="flex flex-col max-w-md mx-auto my-4">
				<h3 class="text-4xl font-semibold mb-4 text-center">Join Our Team</h3>
				<p class="text-center leading-5 py-4 text-base text-pretty">
					Join the only space station company fully funded to design, manufacture, launch, and visit
					the world's first commercial space station.
				</p>

				<button
					on:mouseenter={() => {
						isScaled = true;
					}}
					on:mouseleave={() => {
						isScaled = false;
					}}
					class="w-fit mx-auto backdrop-blur-3xl py-2 px-4"
				>
					View open positions
				</button>
			</div>

			<div class=" w-full flex justify-around">
				<Plus size={`${isScaled ? 40 : 25}`} strokeWidth={0.5} color="white" class="mr-12" />
				<Plus size={`${isScaled ? 40 : 25}`} strokeWidth={0.5} color="white " class="ml-12" />
			</div>
		</div>

		<div class="w-full flex justify-around absolute top-28">
			<Plus
				size={`${isScaled ? 30 : 25}`}
				strokeWidth={0.5}
				color="white"
				class="mr-12"
				style="transition: transform 0.4s ease; transform: translateY({isScaled
					? '-40px'
					: '0px'});"
			/>
			<Plus
				size={`${isScaled ? 30 : 25}`}
				strokeWidth={0.5}
				color="white"
				class="ml-12"
				style="transition: transform 0.4s ease; transform: translateY({isScaled
					? '-40px'
					: '0px'}); "
			/>
		</div>
		<div class="absolute top-32 text-white w-full">
			<div class="flex flex-col max-w-md mx-auto my-4 relative">
				<h3 class="text-4xl font-semibold mb-4 text-center">Join Our Team</h3>
				<p class="text-center leading-5 py-4 text-base text-pretty">
					Join the only space station company fully funded to design, manufacture, launch, and visit
					the world's first commercial space station.
				</p>

				<button
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					class="w-fit mx-auto backdrop-blur-3xl py-2 px-4"
				>
					View open positions
				</button>
			</div>
		</div>
		<div class="w-full flex justify-around absolute bottom-28">
			<Plus
				size={`${isScaled ? 30 : 25}`}
				strokeWidth={0.5}
				color="white"
				class="mr-12"
				style="transition: transform 0.5s ease; transform: translateY({isScaled ? '50px' : '0px'});"
			/>
			<Plus
				size={`${isScaled ? 30 : 25}`}
				strokeWidth={0.5}
				color="white"
				class="ml-12"
				style="transition: transform 0.5s ease; transform: translateY({isScaled ? '50px' : '0px'});"
			/>
		</div>
	</div>

	<div class=" pt-32 pl-12 pb-16">
		<img src="/images/footer/logo.svg" alt="logo" class="invert w-[65%]" />
	</div>

	<div class=""></div>
</footer>
