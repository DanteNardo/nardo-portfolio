<script>
	import Text from "$lib/components/text.svelte";
</script>

<div class="font-light bg-core-100 dark:bg-core-900 print:bg-white text-core-500 dark:text-core-400">
	<div class="max-w-[900px] p-8 print:p-4">
		<div class="">
			<Text h1 resume>Dante Nardo</Text>
			<Text h2 resume class="uppercase !text-2xl !font-normal !tracking-widest">Software Engineer</Text>
			<div class="flex w-full h-2 mt-6">
				<span class="w-1/3 h-2 bg-brand-500" />
				<span class="w-2/3 h-2 bg-core-300 dark:bg-core-700" />
			</div>
		</div>
		<div class="flex mt-12 gap-12">
			<slot />
		</div>
	</div>
</div>