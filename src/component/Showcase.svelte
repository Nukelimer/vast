<script>
	import ThumbnailGallery from './reusable/ThumbnailGallery.svelte';

	const galleryItems = [
		{
			id: 1,
			thumbnail: '/images/haven_1/Haven1_1.png',
			image: '/images/haven_1/Haven1_1.png',
			description: [
				'Haven',
				'Haven-1 missions include crew transportation with the SpaceX Dragon Spacecraft.'
			]
		},
		{
			id: 2,
			thumbnail: '/images/haven_1/Haven1_2.png',
			image: '/images/haven_1/Haven1_2.png',
			description: ['The Windome', 'The 1.1 meter domed windowed, a viewpoint for observation.']
		},
		{
			id: 3,
			thumbnail: '/images/haven_1/Haven1_3.png',
			image: '/images/haven_1/Haven1_3.png',
			description: [
				'Haven-1 & Dragon Docking',
				'Haven-1 missions include crew transportation with the SpaceX Dragon Spacecraft.'
			]
		},
		{
			id: 4,
			thumbnail: '/images/haven_1/Haven1_4.png',
			image: '/images/haven_1/Haven1_4.png',
			description: [
				'Payload Mission',
				"The Haven-1 Lab is the world's first microgravity research, development and manifesting platform on an commercial space station."
			]
		}
	];
</script>

<ThumbnailGallery items={galleryItems} />
