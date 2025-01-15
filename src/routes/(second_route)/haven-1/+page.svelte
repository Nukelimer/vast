<script>
	import KindOfMission from '../../../component/KindOfMission.svelte';
	import Partnership from '../../../component/Partnership.svelte';

	import ProductHero from '../../../component/reusable/ProductHero.svelte';
	import DevelopmentProcess from './components/DevelopmentProcess.svelte';
	import Exterior from './components/Exterior.svelte';
	import Interior from './components/Interior.svelte';
	import MissionTimeline from './components/MissionTimeline.svelte';
	import ShowcaseSecond from './components/ShowcaseSecond.svelte';

	import StackedCard from './components/StackedCard.svelte';
</script>

<div class="pt-12 bg-[#B3ABA3]">
	<ProductHero
		img="/images/haven_1/Haven-1-Title.png"
		text="The world's first commercial space station"
		video_url="/video/Website Header_Haven-1.mp4"
		btn_text="Watch full video"
		blacktext="Haven-2 is poised to succeed the International Space Station—"
		darktext="is home to a state-of-the-art, human-centric innovation lab for both private astronauts and government missions."
		whitetext="Haven-1, targeted to launch in 2025,"
		create_mission_text="Create your mission"
		create_your_mission={true}
	/>

	<StackedCard />
	<Interior />

	<DevelopmentProcess />

	<MissionTimeline />
	<KindOfMission
		color={'bg-white'}
		bg={'!text-black'}
		bg_card="!bg-[#B3ABA3] !text-white"
		isCheckingForLargeScreen={true}
		color_overide="!bg-[#ECE8E3]"
	/>

	<Partnership
		overideStyles="mx-6 mx-0 pt-0 !pb-0 !bg-[#ECE8E3]"
		img_styles=""
		overidePadding="!px-0"
		addPadding="px-6 py-6 bg-[#2A2C2F]"
		rmvPadding="mb-0"
	/>

	<ShowcaseSecond
		items={[
			{
				id: 1,
				thumbnail: '/images/haven_1/haven-lab.png',
				image: '/images/haven_1/haven-lab.png',
				description: [
					'Haven-1 - Lab',
					'Innovation in microgravity through research, development, and manufacturing opportunities. Haven-1 Lab provides ten Mid-deck Locker Equivalent (MLE) payload slots for various experiments.'
				]
			}
		]}
	/>

        <Exterior/>
</div>

<style>
</style>
