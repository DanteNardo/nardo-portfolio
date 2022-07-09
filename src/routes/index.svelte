<script>
	import Tile from "$lib/components/tile.svelte";
	import TileContainer from "$lib/components/tile-container.svelte";
</script>

<Tile class="col-span-full">
	<div class="flex gap-20 items-center">
		<div>
			<h1>Dante<br />Nardo</h1>
			<h3 class="uppercase font-normal tracking-widest">Software Engineer</h3>
		</div>
		<h2 class="normal-case font-light leading-normal">I'm an engineer and designer who loves accessible, useful software.</h2>
	</div>
</Tile>
<Tile href="education" header="Education" class="col-span-4">
	<h5>B.S. 2018</h5>
	<h3>Game Design and Development</h3>
</Tile>
<Tile href="contact" header="Contact" class="col-span-4">
	<p>You can reach me via phone, email, and linkedin.</p>
</Tile>
<Tile href="experience" header="Experience" class="col-span-8"></Tile>
<Tile href="skills" header="Skills" class="col-span-8"></Tile>
<Tile href="projects" header="Projects" class="col-span-8"></Tile>