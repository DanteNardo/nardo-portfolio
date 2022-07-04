<script>
	import { CssBuilder } from "$lib/builders/cssBuilder.js";

	export let href;
	export let header;

	$: css = () => {
		return new CssBuilder()
			.addClass("group flex flex-col w-full h-full p-4 text-left place-content-start justify-between mst")
			.addClass("bg-core-200 dark:bg-core-800 outline outline-2 outline-white dark:outline-black hover:bg-core-300 active:bg-core-200 dark:hover:bg-core-700 dark:active:bg-core-800")
			.addClass($$props?.class, $$props?.class)
			.build();
	}
</script>

<a href={href} class={css()} sveltekit:prefetch>
	<h2>{header}</h2>
	<div>
		<slot />
	</div>
	<div class="flex w-full justify-end opacity-0 group-hover:opacity-100 hover:underline decoration-2 text-brand-600 mst">
		See details ➞
	</div>
</a>