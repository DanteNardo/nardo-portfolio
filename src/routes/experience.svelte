<script>
	import Tile from "$lib/components/tile.svelte";
	import TileContainer from "$lib/components/tile-container.svelte";
</script>

<TileContainer customClass="flex-auto grid-cols-2 rounded-b-xl">
	<TileContainer>
		<Tile href="experience" header="Experience">
		</Tile>
		<TileContainer customClass="grid-cols-2">
			<Tile href="education" header="Education">
				<h4>Bachelors of Science</h4>
				<h3>Game Design and Development</h3>
				<h5>Rochester Institute of Technology</h5>
			</Tile>
			<Tile href="contact" header="Contact">
			</Tile>
		</TileContainer>
	</TileContainer>
	<Tile href="skills" header="Skills">
	</Tile>
</TileContainer>