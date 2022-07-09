<script>
	import Text from "$lib/components/text.svelte";
</script>

<div>
	<Text h2 resume>Experience</Text>
	<div class="flex w-full mb-4">
		<div class="basis-1/3 h-2 bg-brand-500" />
		<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
	</div>
	<div>
		<Text h3 resume>Software Engineer</Text>
		<Text h4 resume>at Viasat Inc.</Text>
		<ol class="list-disc ml-4">
			<Text li resume>Worked on full stack web application for business aviation.</Text>
			<Text li resume>Designed computational geometry library and integrated this library with back-end microservice architecture.</Text>
			<Text li resume>Implemented asynchronous microservice utilizing AWS Lambdas to reduce web application processing time by multiple magnitudes.</Text>
		</ol>
	</div>
	<div class="mt-4">
		<Text h3 resume>AR Internship</Text>
		<Text h4 resume>at Viasat Inc.</Text>
		<ol class="list-disc ml-4">
			<Text li resume>Created an entertainment system overlay for the close quarters of jets using Microsoft Hololens and the Unity game engine.</Text>
			<Text li resume>Developed several experimental AR prototypes including a program that displayed nearby terrain in-flight using Google Maps.</Text>
		</ol>
	</div>
</div>

<div>
	<Text h2 resume>Education</Text>
	<div class="flex w-full mb-4">
		<div class="basis-1/3 h-2 bg-brand-500" />
		<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
	</div>
	<div>
		<Text h3 resume>B.S. Game Design and Development</Text>
		<Text h4 resume>at Rochester Institute of Tech.</Text>
		<Text h5 resume>{'{ 2018 }'}</Text>
	</div>
	
	<Text h2 resume class="mt-12">Skills</Text>
	<div class="flex w-full mb-4">
		<div class="basis-1/3 h-2 bg-brand-500" />
		<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
	</div>
	<div>
		<Text h3 resume>Programming</Text>
		<Text p resume>C, C++, C#, Java, JavaScript, TypeScript, Lua, Python</Text>
	</div>
	<div>
		<Text h3 resume>Software Architecture</Text>
		<Text p resume>RESTful API, gRPC, SQL, NoSQL, CQRS, Event Sourcing</Text>
	</div>
	<div>
		<Text h3 resume>Cloud Architecture</Text>
		<Text p resume>Azure, AWS, Microservices, Docker, Kubernetes, Serverless Functions</Text>
	</div>
	<div>
		<Text h3 resume>UI Frameworks</Text>
		<Text p resume>Blazor, Svelte, React, Angular, OpenGL, Unity, SFML, WPF</Text>
	</div>
	<div>
		<Text h3 resume>Web & Markup</Text>
		<Text p resume>HTML, CSS, SCSS, XML, XAML</Text>
	</div>
	<div>
		<Text h3 resume>Operating Systems</Text>
		<Text p resume>Windows, Mac, Linux, BASH, CMD</Text>
	</div>
	<div>
		<Text h3 resume>Productivity</Text>
		<Text p resume>Git, Perforce, Scrum, Kanban, Agile</Text>
	</div>
	<div>
		<Text h3 resume>Design</Text>
		<Text p resume>Illustrator, InDesign, Photoshop, XD, Affinity Photo, Affinity Publisher</Text>
	</div>
</div>