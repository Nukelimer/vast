<script>
	import RParallax from './R_Parallax.svelte';
	import RoadmapTimeline from './Roadmap_Timeline.svelte';
</script>

<section class="bg-[#ECE8E3] w-full overflow-hidden">
	<RoadmapTimeline
		header="2025: Haven Demo"
		sub_header="In-orbit test bed for critical space station technologies"
		habitable_vol="NA"
		pressured_vol="NA"
		crew="NA"
		img="Haven-Demo"
		bg_img="2025"
		big_img="demo_img_sm"
		big_img_md="demo_img"
	/>
	<RoadmapTimeline
		header="2025: Haven-1"
		sub_header="The world's first commercial space station"
		habitable_vol="45 m³"
		pressured_vol="80 m³"
		crew="4"
		img="Haven-1-Demo_"
		bg_img="2025"
		big_img="haven_1"
		big_img_md="haven_1_sm"
                url='/haven-1'
	/>
        <RoadmapTimeline
		header="2028: Haven-2 First Module"
		sub_header="Designed to succeed the International Space Station before it is retired in 2030"
		habitable_vol="55 m³"
		pressured_vol="127 m³"
		crew="4"
		img="2028_"
		bg_img="2028"
		big_img="2028_lg"
		big_img_md="2028_lg"
                url='/haven-2'
	/>

          <RoadmapTimeline
		header="2032: Haven-2 Fully Constructed"
		sub_header="Surpassing the capabilities of the International Space Station and other sovereign space stations"
		habitable_vol="611 m³"
		pressured_vol="1160 m³"
		crew="12"
		img="2032_"
		bg_img="2032"
		big_img="2032_lg_"
		big_img_md="2032_lg"
                url='/haven-2'
	/>

             <RoadmapTimeline
		header="2035: Artificial Gravity Station"
		sub_header="The future of long-term habitation in space."
		habitable_vol="700 m³"
		pressured_vol="1400 m³"
		crew="40"
		img="2035"
		bg_img="2035_"
		big_img="2035_lg"
		big_img_md="2035_md"
                url='/haven-2'
	/>
</section>
