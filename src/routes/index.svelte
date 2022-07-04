<script>
	import Tile from "$lib/components/tile.svelte";
	import TileContainer from "$lib/components/tile-container.svelte";
</script>

<div class="flex flex-col w-full h-full">
	<Tile>
		<h1>Dante<br />Nardo</h1>
		<h3 class="uppercase font-normal tracking-widest">Software Engineer</h3>
	</Tile>
	<div class="flex">
		<div class="basis-6/12 rounded-b-xl">
			<Tile href="experience" header="Experience">
			</Tile>
			<div class="flex">
				<Tile href="education" header="Education" class="rounded-bl-xl">
					<h5>B.S. 2018</h5>
					<h3>Game Design and Development</h3>
				</Tile>
				<Tile href="contact" header="Contact">
					<p>You can reach me via phone, email, and linkedin.</p>
				</Tile>
			</div>
		</div>
		<Tile href="skills" header="Skills" class="basis-6/12 rounded-br-xl"></Tile>
	</div>
</div>
