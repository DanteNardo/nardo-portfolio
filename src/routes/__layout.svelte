<script>
	import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
</script>

<div class="flex flex-col w-screen h-screen max-w-screen max-h-screen bg-core-200 dark:bg-core-800 text-core-500 dark:text-core-500">
	<div class="flex w-full h-full p-24 items-center justify-center">
		<!-- AppContainer -->
		<div class="flex-auto max-w-full max-h-full rounded-xl drop-shadow-2xl">
			<!-- Header -->
			<div class="flex w-full p-4 justify-between rounded-t-xl section">
				<div class="flex flex-grow mr-2 px-3 py-0.5 rounded-xl items-center bg-core-300 dark:bg-core-700">
					<Breadcrumbs />
				</div>
				<div class="flex gap-2 items-center">
					<div class="w-4 h-4 rounded-full bg-amber-500" />
					<div class="w-4 h-4 rounded-full bg-emerald-500" />
					<div class="w-4 h-4 rounded-full bg-indigo-500" />
				</div>
			</div>
			<!-- Grid -->
			<slot />
		</div>
	</div>
</div>