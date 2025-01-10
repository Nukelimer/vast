<script>
	import Marquee from 'svelte-fast-marquee';
  import EmblaCarousel from 'embla-carousel-svelte';


  
	const logoMarguee = [
		'/images/in-progress/_tc.png',
		'/images/in-progress/_twp.png',
		'/images/in-progress/cnbc.png',
		'/images/in-progress/cnn.png',
		'/images/in-progress/Engadget.png',
		'/images/in-progress/Payload.png',
		'/images/in-progress/reuters.png'
	];
</script>

<div class="bg-[#2A2C2F] py-16">
	<h2 class="text-center pb-16 text-3xl text-white font-semibold">In the Progress</h2>

	<Marquee speed={50} direction='left' pauseOnHover='true'>
		{#each logoMarguee as data}
			<img src={data} alt="Pictures"  class="h-8 filter brightness-0 px-10 invert"/>
		{/each}
	</Marquee>

        <EmblaCarousel {slides} {options}>
  <div slot="slide" class="embla__slide" each="{slide}">
    <div class="quote-container">
      <p>{slide.quote}</p>
      <p class="author">{slide.author}</p>
    </div>
  </div>
</EmblaCarousel>
</div>
