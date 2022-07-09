<script>
	import Text from "$lib/components/text.svelte";
	import Tile from "$lib/components/tile.svelte";
	import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
</script>

<div class="font-light bg-core-100 dark:bg-core-900 text-core-500 dark:text-core-500">
	<div class="max-w-[900px] p-8">
		<div>
			<Text h1 resume>Dante<br />Nardo</Text>
			<Text h2 resume class="uppercase !text-2xl !font-normal !tracking-widest">Software Engineer</Text>
			<div class="flex w-full mt-6">
				<div class="basis-1/3 h-2 bg-brand-500" />
				<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
			</div>
		</div>
		<div class="grid grid-cols-3 mt-12 gap-12">
			<slot />
		</div>
	</div>
</div>