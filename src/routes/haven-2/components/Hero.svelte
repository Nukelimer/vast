<script>
	import { onMount } from 'svelte';
	import ProductHero from '../../../component/reusable/ProductHero.svelte';
	const attributesData = ['Safe', 'On time', 'Reliable', 'Cost effective', 'Capable', 'Versatile'];

	let container;
	let scrollYAxis = 0;
	let rotation = 0;
        let Ymove = 0;

	const handleScroll = () => {
		if (container) {
			const rect = container.getBoundingClientRect();
			const top = -rect.top;
			const height = rect.height;

			scrollYAxis = Math.min(Math.max(top, 0), height);
			const maxRotation = 20;
			rotation = (scrollYAxis / height) * maxRotation;
                        Ymove = scrollYAxis /height
		}
               
		
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	console.log(scrollYAxis);
</script>
<div class="flex-shrink-0" bind:this={container}>



        <ProductHero
                img="/images/haven_2/Haven-2_page.png"
                text="Designed to succeed the International Space Station"
                video_url="/video/Header_Haven-2.mp4"
                btn_text="Watch full video"
                blacktext="Haven-2 is poised to succeed the International Space Station—"
                darktext="introducing groundbreaking opportunities to expand progress on Earth and shape the future of life in space."
        />
        <div class="flex md:justify-evenly relative   ">
                <div class="mx-10 md:mx-16  my-auto md:w-1/3 ">
                        {#each attributesData as data}
                                <div class="flex items-center ">
                                        <span class="h-[10px] w-[10px] mx-2 my-auto bg-[#FA542F]"> </span>
                                        <span class="font-semibold  text-3xl text-nowrap">{data}</span>
                                </div>
                        {/each}
                </div>
                <img
                        src={'/images/haven_2/parallax img.png'}
                        alt="background haven"
                        class="select-none max-w-[300px]    ml-1 md:my-12 md:max-w-[550px] md:mr-4 w-full  md:top-14  "
                        style="transform: rotate({rotation}deg);  "
                        
                />
        </div>

</div>

