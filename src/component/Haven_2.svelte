<script>
	import Parallax from './reusable/Parallax.svelte';
</script>

<Parallax
	productName="Haven-2"
	additionalStyles='pr-20 '

	launchingData="FIRST MODULE OPERATIONAL IN 2028, FULLY Constructed IN 2032"
	Data={[
		{ label: 'CREW', value: '12' },
		{ label: 'HABITABLE VOLUME', value: '611 m3' },
		{ label: 'PRESSURIZED VOLUME', value: '1160 m3' },
		{ label: 'CONSUMABLE MASS', value: '100,000 KG' },
		{ label: 'LAUNCH MASS', value: '282,000 kg' },
		{ label: 'STATION POWER', value: '86 Kw' },
		{ label: 'PAYLOAD POWER', value: '40 KW' }
	]}
	parallaxImg="/images/haven_1/background circle.png"
	circleImg="/images/haven_2/Haven-2.png"
	aboutIt="Designed to succeed the International Space Station"
        url='/haven-2'
	text="Learn more"
	img="/images/haven_2/Haven-2-Title.png"
        icon='left'
/>


