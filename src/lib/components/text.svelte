<script>
	import { CssBuilder } from "$lib/builders/cssBuilder.js";

	export let resume;
	export let h1 = false;
	export let h2 = false;
	export let h3 = false;
	export let h4 = false;
	export let h5 = false;
	export let p = false;
	export let li = false;

	$: css = () => {
		return new CssBuilder()
			.addClass("font-display leading-none", h1 || h2 || h3 || h4 || h5)
			.addClass("font-sans", p || li)
			.addClass("text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-core-900 dark:text-core-100", h1 && !resume)
			.addClass("text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase text-core-700 dark:text-core-500", h2 && !resume)
			.addClass("text-sm md:text-base lg:text-lg font-medium", h3 && !resume)
			.addClass("text-xs md:text-sm lg:text-base font-medium", h4 && !resume)
			.addClass("sm:text-xs lg:text-sm font-medium uppercase", h5 && !resume)
			.addClass("text-5xl font-extrabold tracking-tight uppercase text-core-900 dark:text-core-100", h1 && resume)
			.addClass("text-2xl mb-2 font-bold text-core-900 dark:text-core-100", h2 && resume)
			.addClass("text-lg mb-1 font-semibold text-core-900 dark:text-core-100", h3 && resume)
			.addClass("text-sm mb-1.5 font-normal text-core-900 dark:text-core-100", h4 && resume)
			.addClass("text-xs mb-2 font-normal normal-case text-core-500 dark:text-core-400", h5 && resume)
			.addClass("text-sm mb-4 leading-tight font-normal text-core-500 dark:text-core-400", p && resume)
			.addClass("text-sm mb-1 leading-tight font-normal text-core-500 dark:text-core-400", li && resume)
			.addClass($$props?.class, $$props?.class)
			.build();
	}
</script>

{#if h1}
	<h1 class={css()}>
		<slot />
	</h1>
{:else if h2}
	<h2 class={css()}>
		<slot />
	</h2>
{:else if h3}
	<h3 class={css()}>
		<slot />
	</h3>
{:else if h4}
	<h4 class={css()}>
		<slot />
	</h4>
{:else if h5}
	<h5 class={css()}>
		<slot />
	</h5>
{:else if p}
	<p class={css()}>
		<slot />
	</p>
{:else if li}
	<li class={css()}>
		<slot />
	</li>
{/if}