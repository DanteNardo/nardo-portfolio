<script>
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	$: breadcrumbs = [];

	afterNavigate(() => {
		let url = $page.url.pathname;

		if (url.length === 1) {
			breadcrumbs = [{
				href: '/'
			}];
			return;
		}

		let split = url.split('/');
		breadcrumbs = [];

		for (let i = 0; i < split.length; i++) {
			if (i > 0) {
				breadcrumbs.push({
					title: split[i],
					href: breadcrumbs[i-1].href + split[i]
				});
			}
			else {
				breadcrumbs.push({
					href: split[i]
				});
			}
		}
	});
</script>

<h3>
	{#each breadcrumbs as crumb}
		{#if crumb?.title}
		<!-- ➞ -->
			<span class="">/</span><a href={crumb.href} class="hover:underline hover:decoration-2">{crumb.title}</a>
		{:else}
			<a href="/" class="hover:underline hover:decoration-2">portfolio</a>
		{/if}
	{/each}
</h3>