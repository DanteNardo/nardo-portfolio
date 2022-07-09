<script>
	import { CssBuilder } from '$lib/builders/cssBuilder.js';

	$: css = () => {
		return new CssBuilder()
			.addClass("flex flex-wrap")
			.addClass($$props?.class, $$props?.class)
			.build();
	};
</script>

<div class={css()}>
	<slot />
</div>