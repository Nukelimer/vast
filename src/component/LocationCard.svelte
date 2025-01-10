<script>
	import Button from './reusable/Button.svelte';

	export let img = '';
	export let heading = '';
	export let url = '';
	export let mapLink = '';
	export let tasks = '';
        export let btnText = '';

        export let address = '';
</script>

<div class="">
	<div class="">
		<img src={img} alt={heading} />

		<div class="">
			<h3>{heading}</h3>

			{#if tasks}
				<p>{task}</p>
			{/if}

			<p>{address}</p>

			{#if url}
				<a href={url}>
					<Button text="{btnText}" />
				</a>
			{/if}

			<a href={mapLink}>
				<Button text="{btnText}" />
			</a>
		</div>
	</div>
</div>
