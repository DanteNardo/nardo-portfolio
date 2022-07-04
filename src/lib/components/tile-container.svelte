<script>
	import { CssBuilder } from '$lib/builders/cssBuilder.js';

	$: css = () => {
		return new CssBuilder()
			.addClass("grid justify-items-stretch")
			.addClass($$props?.class, $$props?.class)
			.build();
	};
</script>

<div class={css()}>
	<slot />
</div>