import Skill from "./skillsComponents/Skill";

const Skills = () => {
	/**
	 * TODO: Add sections for categorisation
	 * 	* Frontend
	 * 	* Backend
	 *  * Tools
	 * 	* Cloud?
	 * 	* Design?
	 */

	return (
		<div id="skills" className="w-full lg:h-screen px-10 xl:p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-main">Skills</p>
				<h2 className="py-4">I Have Learned</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Skills Boxes */}
					<Skill
						title="HTML"
						image="HTML5"
						modalDesc="As a web developer, I have extensive experience working with HTML. I am well-versed in all of the latest HTML standards and am able to use it to create responsive and accessible websites that are optimized for search engines. I am also familiar with best practices for semantic markup, which helps search engines to understand the content of a website more accurately."
					/>
					<Skill
						title="CSS"
						image="CSS"
						modalDesc="I am well-versed in all of the latest CSS standards and am able to use it to create responsive and accessible designs that are optimized for different devices and screen sizes. I have also experience working with a CSS preprocessor, SASS, which allows me to write more efficient and maintainable code."
					/>
					<Skill
						title="JavaScript"
						image="JavaScript"
						modalDesc="Learned basics in at my university"
					/>
					<Skill
						title="TypeScript"
						image="TypeScript"
						modalDesc="Initially exposed to TypeScript when creating a widget for REVIEWS.io. I have become proficient in using it to create robust, maintainable, and scalable web applications. I am well-versed in using TypeScript's features such as interfaces, classes, and decorators, which help to improve the readability, organization, and maintainability of the code. I am also familiar with TypeScript's type inference, which enables me to catch errors early in the development process, leading to fewer bugs in the production."
					/>
					<Skill
						title="ReactJS"
						image="ReactJS"
						modalDesc="I am well-versed in using React's component-based architecture, which allows me to break down complex web pages into smaller, reusable components. This makes it easy to manage and maintain the codebase, and allows for efficient code re-use across different parts of the application. I am also familiar with React Hooks and Context API, which help to manage the state and the flow of data between different components in a clean and efficient way."
					/>
					{/* <Skill title="React Native" image="ReactJS" /> */}
					<Skill
						title="AngularJS"
						image="AngularJS"
						modalDesc="I am well-versed in using AngularJS's MVC architecture, which allows me to effectively organize my code and separate the concerns of the application. This makes it easy to manage and maintain the codebase, and allows for efficient code re-use across different parts of the application. I am also familiar with AngularJS's two-way data binding and dependency injection features, which help to manage the state and flow of data between different components in a clean and efficient way."
					/>
					<Skill
						title="JQuery"
						image="JQuery"
						modalDesc="I am well-versed in using jQuery's core functions, such as selecting and manipulating DOM elements, handling events, and making AJAX requests. This allows me to easily create dynamic and interactive web pages without having to write complex JavaScript code. I am also familiar with jQuery's built-in effects and animations, which can be used to create visually appealing web pages with minimal effort."
					/>
					{/* <Skill title="NextJS" image="NextJS" /> */}
					{/* <Skill title="NodeJS" image="NodeJS" /> */}
					<Skill
						title="Tailwind"
						image="Tailwind"
						modalDesc="I am well-versed in using Tailwind's pre-defined CSS classes, which allow me to quickly and easily create responsive and accessible web pages. The framework's class-based approach also allows for easy modification and customization of the design, making it easy to create unique and polished designs. I am also familiar with using Tailwind's built-in responsive design features, which allow me to create web pages that adapt to different screen sizes and devices. I have experience working with different Tailwind plugins and libraries, such as Tailwind UI, which allows me to create web applications more efficiently and effectively."
					/>
					<Skill
						title="Php"
						image="Php"
						modalDesc="I am experienced in using PHP for database integration and am familiar with using popular databases such as MySQL and MongoDB. I am able to use PHP to interact with databases and create dynamic web pages that retrieve and display data from a database."
					/>
					<Skill
						title="Laravel"
						image="Laravel"
						modalDesc="I am well-versed in using Laravel's elegant syntax and built-in tools for common web application tasks such as routing, authentication, and caching. I am able to use the framework to create efficient and maintainable web applications that follow best practices. I am experienced in using Laravel's built-in Eloquent ORM for database integration and have experience working with popular databases such as MySQL, MongoDB, and Oracle. I am able to use Eloquent to interact with databases and create dynamic web pages that retrieve and display data from a database. I am also experienced in using Laravel's built-in support for front-end technologies like JavaScript, CSS, and HTML. I am able to use these technologies in conjunction with Laravel to create dynamic and interactive web pages that provide a rich user experience."
					/>
					<Skill
						title="MySql"
						image="MySql"
						modalDesc="I am well-versed in using SQL to create, read, update, and delete data in a MySQL database. I am able to use advanced SQL features such as subqueries, joins, and transactions to create efficient and maintainable database operations."
					/>
					{/* <Skill title="MongoDB" image="mongodb" /> */}
					<Skill
						title="GitHub"
						image="GitHub"
						modalDesc="I am well-versed in using Git, the version control system that is integrated with GitHub, to manage code revisions and collaborate with other developers on a project. I am able to use Git commands such as clone, push, pull, and merge to create efficient and maintainable workflows. I have experience working with GitHub's web-based interface, including issues, pull requests, and project boards. I am able to use these tools to track bugs, collaborate on code changes, and manage project tasks. I am experienced in using GitHub's features such as branches, forks, and pull requests to collaborate with other developers on a project, and I am able to use these tools to review code, discuss changes, and merge code into the main branch. I am familiar with using GitHub's integrations such as GitHub Actions, GitHub Pages, GitHub Learning Lab, GitHub Packages which can help me to automate my workflow, deploy my website, learn new skills, and distribute my code."
					/>
					{/* <Skill title="AWS" image="AWS" modalDesc="" /> */}
				</div>
			</div>
		</div>
	);
};

export default Skills;
