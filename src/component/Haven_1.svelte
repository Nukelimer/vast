<script>
	import Parallax from './reusable/Parallax.svelte';
</script>

<Parallax
	productName="Haven-1"
	textStyles="!text-[#ff5623]"
	launchingData="Launching 2025"
	Data={[
		{ label: 'HEIGHT', value: '10.1 m' },
		{ label: 'CREW', value: '4' },
		{ label: 'HABITABLE VOLUME', value: '45 m3' },
		{ label: 'PRESSURIZED VOLUME', value: '80 m3' },
		{ label: 'MASS', value: '14,500 kg' },
		{ label: 'POWER', value: '13,200 w' },
		{ label: 'ORBIT', value: '51.6°' }
	]}
	parallaxImg="/images/haven_1/background circle.png"
	circleImg="/images/haven_1/haven-1.png"
	aboutIt="The world's first commercial space station"
	text="Learn more"
	img="/images/haven_1/Haven-1-Title.png"
	url="/haven-1"
	
/>
