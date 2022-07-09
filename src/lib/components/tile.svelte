<script>
	import { CssBuilder } from "$lib/builders/cssBuilder.js";

	export let href;
	export let header;

	$: linkCss = () => {
		return new CssBuilder()
			.addClass("group relative px-4 pt-4 pb-12 text-left mst")
			.addClass("bg-core-200 dark:bg-core-800 outline outline-2 outline-white dark:outline-black hover:bg-core-300 active:bg-core-200 dark:hover:bg-core-700 dark:active:bg-core-800")
			.addClass($$props?.class, $$props?.class)
			.build();
	}

	$: divCss = () => {
		return new CssBuilder()
			.addClass("group p-4 text-left mst")
			.addClass("bg-core-200 dark:bg-core-800 outline outline-2 outline-white dark:outline-black")
			.addClass($$props?.class, $$props?.class)
			.build();
	}
</script>

{#if href}
	<a href={href} class={linkCss()} sveltekit:prefetch>
		{#if header}
			<h2 class="mb-2">{header}</h2>
		{/if}
		<slot />
		<div class="absolute bottom-4 right-4">
			<span class="opacity-0 group-hover:opacity-100 hover:underline decoration-2 text-brand-600 mst">See details ➞</span>
		</div>
	</a>
{:else}
	<div class={divCss()}>
		{#if header}
			<h2>{header}</h2>
		{/if}
		<slot />
	</div>
{/if}