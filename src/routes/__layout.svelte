<script>
	import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
</script>

<div class="flex flex-col w-screen h-screen max-w-screen max-h-screen bg-core-200 dark:bg-core-800 text-core-500 dark:text-core-500">
	<div class="flex w-full pt-8 justify-center">
		<h1 class="text-center">
			<span >Dante</span>
			<br />
			<span>Nardo</span>
		</h1>
	</div>
	<div class="flex w-full h-full p-24 items-center justify-center">
		<div class="flex flex-col w-[66vw] h-full rounded-xl shadow-xl">
			<div class="flex w-full p-4 justify-between rounded-t-xl section">
				<Breadcrumbs />
				<div class="flex gap-2 items-center">
					<div class="w-4 h-4 rounded-full bg-amber-500" />
					<div class="w-4 h-4 rounded-full bg-emerald-500" />
					<div class="w-4 h-4 rounded-full bg-indigo-500" />
				</div>
			</div>
			<slot />
		</div>
	</div>
</div>