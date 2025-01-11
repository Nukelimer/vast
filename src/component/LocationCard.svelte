<script>
	import { ChevronRight } from 'lucide-svelte';
	import Button from './reusable/Button.svelte';

	export let img = '';
	export let heading = '';

	export let mapLink = '';

	export let btnText = '';

	export let address = '';
</script>

<div class="">
	<div class="text-white mb-20 md:mb-0">
		<img src={img} alt={heading} />

		<div class="">
			<h3 class="font-bold text-xl mt-8 mb-3">{heading}</h3>

			

			<p class="w-1/3 md:w-2/3 mb-2">{address}</p>

			

			<a href={mapLink} class="flex items-center">
				<ChevronRight color="#ff5623" size="22" />
				<Button text={btnText} />
			</a>
		</div>
	</div>
</div>
