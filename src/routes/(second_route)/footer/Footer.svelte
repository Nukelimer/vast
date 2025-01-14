<script>
	import { Video } from 'flowbite-svelte';
	import { Instagram, Linkedin, Plus, Twitter, Youtube } from 'lucide-svelte';
	
	let isScaled = false;
	let isHovered = false;
	let LinkedinIsHovered = false;
	let YoutubeIsHovered = false;
	let InstagramIsHovered = false;
	let TwitterIsHovered = false;

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
					name: `2851 Orange Avenue 
                                        Long Beach, CA 90806 USA`,
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
		},

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

	const navigationRoutes = [
		{
			name: 'Privacy Policy',
			path: '/privacy-policy',
			description: 'View our privacy policy'
		},
		{
			name: 'Terms of Use',
			path: '/terms-of-use',
			description: 'Read our terms of use'
		},
		{
			name: 'Media Assets Terms of Use',
			path: '/media-assets-terms',
			description: 'Terms for using media assets'
		},
		{
			name: 'Suppliers',
			path: '/suppliers',
			description: 'Information for suppliers'
		}
	];
</script>

<footer class=" bg-[#ECE8E3]  md:px -6 ">
	<div class="relative flex justify-center min-h-[80vh]">
		<Video
			src="/video/flux-vast.mp4"
			autoplay
			loop
			muted
			class="w-full max-w-full h-full min-h-[80vh]  pointer-events-none object-cover brightness-50"
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

		<div class="w-full flex justify-around absolute top-20 lg:top-28">
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
		<div class="absolute  bottom-[35%] text-white w-fit">
			<div class="flex flex-col max-w-md mx-auto my-4 relative">
				<h3 class=" text-3xl lg:text-4xl font-semibold mb-4 text-center">Create your mission aboard Haven-1</h3>
				<p class="text-center leading-5 py-4 text-sm md:text-base text-pretty">
					Email us at <a  class="underline text-[#FA542F]" href="mailto:fly@vastspace.com">fly@vastspace.com</a> to inquire about the Haven-1 program and our first mission aboard the world’s first commercial space station.
				</p>

				
			</div>
		</div>
		<div class="w-full flex justify-around absolute bottom-20 lg:bottom-28">
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

	<div class=" mt-32 px-6 pb-28">
		<img
			src="/images/footer/logo.svg"
			alt="logo"
			class="invert w-[65%] lg:w-full lg:mx-auto lg:max-w-[500px]"
		/>
	</div>

	<div class="px-6 lg:flex">
		<div class=" lg:w-full flex">
			<ul class="flex flex-col gap-24 lg:justify-between w-full md:flex-row-reverse lg:gap-0 lg:w-full">
				{#each footerData as data}
					<div class="fle lg:block w-full">
						<h3 class="uppercase text-sm  font-bold md:font-semibold text-nowrap mb-5">{data.name}</h3>

						<li>
							{#each data.info as dataX}
								<a href={dataX?.link} class="hover:text-red-400">
									<p class="my-4 max-w-[180px]">{dataX?.name}</p>
								</a>
							{/each}
						</li>
					</div>
				{/each}
			</ul>
		</div>

		<div class=" lg:w-1/2">
			<label for="email">
				<h3 class="text-sm uppercase font-semibold mb-5 mt-8 lg:mt-0">Sign Up for Updates</h3></label
			>
			<form class="flex flex-col md:flex-row md:items-center mb-5">
				<div class="">
					<input
						type="email"
						name=""
						id="email"
						required
						class="min-w-1/2 w-full mb-4 md:mb-0 md:w-[350px] md:max-w-[500px] border-none outline-none focus:border-none focus:outline-none ring-0 focus:ring-0 placeholder:text-zinc-400 py-3"
						placeholder="Enter your email"
					/>
				</div>
				<button class=" py-3 px-8 text-white bg-[#2A2C2F] text-nowrap">Sign Up</button>
			</form>
			<p class=" text-2xl md:w-2/3 font-medium md:text-sm">
				By subscribing you agree to our <span class="border-b border-black"> Privacy Policy</span> and
				provide consent to receive updates from Vast.
			</p>
		</div>
	</div>

	<div class=" flex mt-12 items-start lg:items-center flex-col lg:flex-row lg:justify-between ">
		

		<div class=" mb-6 md:mb-0 flex ml-6 lg:ml-0 flex-col md:flex-row md:items-center w-full lg:justify-evenly lg:w-1/3">
			<div class=" flex lg:w-1/2 gap-7 lg:justify-between mr-8 lg:pl-6 ">
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class=""
					on:mouseenter={() => {
						LinkedinIsHovered = true;
					}}
					on:mouseleave={() => {
						LinkedinIsHovered = false;
					}}
				>
					<Linkedin color={`${LinkedinIsHovered ? 'red' : 'black'}`}  size={13}/>
				</div>
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="" on:mouseenter={() => {
						InstagramIsHovered = true;
					}}
					on:mouseleave={() => {
						InstagramIsHovered = false;
					}}>
					<Instagram color={`${InstagramIsHovered ? 'red' : 'black'}`} size={13}/>
				</div>
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="" on:mouseenter={() => {
						YoutubeIsHovered = true;
					}}
					on:mouseleave={() => {
						YoutubeIsHovered = false;
					}}>
					<Youtube color={`${YoutubeIsHovered ? 'red' : 'black'}`}  size={13}/>
				</div>
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="" on:mouseenter={() => {
						TwitterIsHovered = true;
					}}
					on:mouseleave={() => {
						TwitterIsHovered = false;
					}} >
					<Twitter color={`${TwitterIsHovered ? 'red' : 'black'}`}  size={13}/>
				</div>

				
			</div>

			<p class="text-xs text-nowrap mr-6 mt-6 md:mt-0">© 2025 VAST SPACE LLC. All rights reserved.</p>
		</div>

                <div
			class="  flex w-1/2 flex-wrap md:flex-nowrap  lg:w-1/2 lg:justify-end  gap-2 md:gap-7 md:justify- between mx-6 
                "
		>
			{#each navigationRoutes as data}
				<a href={data.path} class="hover:text-red-400">
					<p class=" md:my-4 max-w-[180px] font-semibold text-nowrap text-[10px] uppercase">{data.name}</p>
				</a>
			{/each}
		</div>
	</div>
</footer>
