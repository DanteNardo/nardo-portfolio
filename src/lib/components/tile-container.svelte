<script>
	import { CssBuilder } from '$lib/builders/cssBuilder.js';

	export let customClass;

	$: css = () => {
		return new CssBuilder()
			.addClass("grid justify-items-stretch")
			.addClass(customClass)
			.build();
	};
</script>

<div class={css()}>
	<slot />
</div>