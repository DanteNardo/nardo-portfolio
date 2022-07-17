<script>
  import PhoneFilled20 from "carbon-icons-svelte/lib/PhoneFilled20";
  import Email20 from "carbon-icons-svelte/lib/Email20";
  import LogoGithub20 from "carbon-icons-svelte/lib/LogoGithub20";
  import LogoLinkedin20 from "carbon-icons-svelte/lib/LogoLinkedin20";
  import LogoTwitter20 from "carbon-icons-svelte/lib/LogoTwitter20";
	import Text from "$lib/components/text.svelte";
</script>

<div class="w-1/3">
	<Text h2 resume>Experience</Text>
	<div class="flex w-full mb-4">
		<div class="basis-1/3 h-2 bg-brand-500" />
		<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
	</div>
	<div>
		<Text h3 resume>Software Engineer</Text>
		<Text h4 resume>at Viasat Inc.</Text>
		<Text h5 resume>{'{ Jan 2019 - Apr 2020 }'}</Text>
		<ol class="list-disc ml-4">
			<Text li resume>Worked on full stack web application for business aviation.</Text>
			<Text li resume>Designed computational geometry library and integrated this library with back-end microservice architecture.</Text>
			<Text li resume>Implemented asynchronous microservice utilizing AWS Lambdas to reduce web application processing time by multiple magnitudes.</Text>
		</ol>
	</div>
	<div class="mt-4">
		<Text h3 resume>AR Internship</Text>
		<Text h4 resume>at Viasat Inc.</Text>
		<Text h5 resume>{'{ May 2018 - Aug 2018 }'}</Text>
		<ol class="list-disc ml-4">
			<Text li resume>Created an entertainment system overlay for the close quarters of jets using Microsoft Hololens and the Unity game engine.</Text>
			<Text li resume>Developed several experimental AR prototypes including a program that displayed nearby terrain in-flight using Google Maps.</Text>
		</ol>
	</div>
</div>

<div class="w-1/3">
	<Text h2 resume>Education</Text>
	<div class="flex w-full mb-4">
		<div class="basis-1/3 h-2 bg-brand-500" />
		<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
	</div>
	<div>
		<Text h3 resume>B.S. Game Design and Development</Text>
		<Text h4 resume>at Rochester Institute of Tech.</Text>
		<Text h5 resume>{'{ Dec 2018 }'}</Text>
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

<div class="w-1/3">
	<Text h2 resume>Projects</Text>
	<div class="flex w-full mb-4">
		<div class="basis-1/3 h-2 bg-brand-500" />
		<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
	</div>
	<div>
		<Text h3 resume>Protean Zine</Text>
		<Text h4 resume>a dynamic markdown site</Text>
		<Text h5 resume>{'{ 2022 }'}</Text>
		<ol class="list-disc ml-4">
			<Text li resume>Created template to easily deploy websites on the edge with static content from markdown.</Text>
			<Text li resume>Configured compilation so that a user can include components in markdown, like a reading-time component that dynamically displays how long it will take to read the current page you are on.</Text>
		</ol>
	</div>
	<div class="mt-4">
		<Text h3 resume>Zoft</Text>
		<Text h4 resume>a soft body physics simulation</Text>
		<Text h5 resume>{'{ 2018 }'}</Text>
		<ol class="list-disc ml-4">
			<Text li resume>Created a 2D soft body physics simulation using a mass-spring system.</Text>
		</ol>
	</div>
	<div class="mt-4">
		<Text h3 resume>Project Colorblind</Text>
		<Text h4 resume>an experimental video game</Text>
		<Text h5 resume>{'{ 2017 }'}</Text>
		<ol class="list-disc ml-4">
			<Text li resume>Led development of a cooperative puzzle platformer where users wore colored eyeglasses that hid game elements from view.</Text>
			<Text li resume>Players must work together to convey information only they can see with their glasses on.</Text>
		</ol>
	</div>

	<Text h2 resume class="mt-12">Contact</Text>
	<div class="flex w-full mb-4">
		<div class="basis-1/3 h-2 bg-brand-500" />
		<div class="flex-auto h-2 bg-core-300 dark:bg-core-700" />
	</div>
	<Text p resume class="flex flex-col gap-1">
		<span class="flex items-center">
			<PhoneFilled20 class="mr-2" /> 
			760-310-7630
		</span>
		<span class="flex items-center">
			<Email20 class="mr-2" /> 
			dante.nardo@outlook.com
		</span>
		<span class="flex items-center">
			<LogoLinkedin20 class="mr-2" /> 
			dante-nardo
		</span>
		<span class="flex items-center">
			<LogoGithub20 class="mr-2" />
			<a href="https://github.com/TheDolentCity" class="hover:underline decoration-2">TheDolentCity</a>
		</span>
		<span class="flex items-center">
			<LogoTwitter20 class="mr-2" />
			@nardogamedev
		</span>
	</Text>
</div>