<script>
	import Tile from "$lib/components/tile.svelte";
	import TileContainer from "$lib/components/tile-container.svelte";
</script>

<TileContainer class="flex-auto grid-rows-2 rounded-b-xl">
	<Tile>
		<h3 class="uppercase">Bachelors of Science</h3>
		<h1>Game Design and Development</h1>
		<!-- <h2 class="mt-2 normal-case font-semibold">at Rochester Institute of Technology</h2> -->
	</Tile>
	<TileContainer class="grid-cols-2">
		<Tile header="Experience">
		</Tile>
		<TileContainer class="grid-cols-2">
			<Tile href="education" header="Education">
				<h4>Bachelors of Science</h4>
				<h3>Game Design and Development</h3>
				<h5>Rochester Institute of Technology</h5>
			</Tile>
			<Tile href="contact" header="Contact">
			</Tile>
		</TileContainer>
	</TileContainer>
</TileContainer>