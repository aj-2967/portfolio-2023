import { MdOutlineWork } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";

import TabComponent from "../components/projectsComponents/projectComponents/TabComponent";
import TabContent from "../components/projectsComponents/projectComponents/TabContent";

const tabs = [
	{
		title: "Professional",
		id: "professional",
		icon: <MdOutlineWork />,
		color: "#5d5dff",
		content: TabContent,
		type: "work",
	},
	{
		title: "Personal",
		id: "personal",
		icon: <GiPartyPopper />,
		color: "#3BB7A8",
		content: TabContent,
		type: "personal",
	},
];

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-10 xl:px-2 py-16">
				<p className="uppercase text-xl tracking-widest text-main">Projects</p>
				<h2 className="py-4">I Have Worked On</h2>

				<TabComponent tabs={tabs} />

				{/* <div className="grid md:grid-cols-3 gap-8">
					{projectData
						.map((project, index) => (
							<ProjectItem
								key={index}
								title={project.title}
								brief={project.modaltitle}
								bg={project.image}
								url={project.pageLink}
								demo={project.demo}
								gradientOne={project.gradientOne}
								gradientTwo={project.gradientTwo}
							/>
						))
						.reverse()}
				</div> */}
			</div>
		</div>
	);
};

{
	/* <Tab.Group>
	<Tab.List className="flex space-x-1 p-1">
		{tabs.map((tab, index) => (
			<Tab
				key={index}
				className={({ selected }) =>
					classNames(
						"w-full flex rounded-sm py-2.5 text-xl font-medium leading-5 shadow-none focus:outline-none",
						"",
						selected ? "text-main" : "text-black",
						index === 1 ? "justify-start ml-10" : "justify-end mr-10"
					)
				}
			>
				{tab}
			</Tab>
		))}
	</Tab.List>
	<Tab.Panels className="mt-2 pt-4 w-full">
		<Tab.Panel
			key={1}
			// className="rounded-xl p-3 flex flex-col lg:flex-row w-full justify-around"
			className="grid md:grid-cols-3 gap-8"
		>
			{projectData
				.filter((project) => project.type === "work")
				.map((project, index) => (
					<ProjectItem
						key={index}
						title={project.title}
						brief={project.modaltitle}
						bg={project.image}
						url={project.pageLink}
						demo={project.demo}
						gradientOne={project.gradientOne}
						gradientTwo={project.gradientTwo}
					/>
				))
				.reverse()}
		</Tab.Panel>
		<Tab.Panel
			key={2}
			// className="rounded-xl p-3 flex flex-col lg:flex-row w-full justify-around"
			className="grid md:grid-cols-3 gap-8"
		>
			{projectData
				.filter((project) => project.type === "personal")
				.map((project, index) => (
					<ProjectItem
						key={index}
						title={project.title}
						brief={project.modaltitle}
						bg={project.image}
						url={project.pageLink}
						demo={project.demo}
						gradientOne={project.gradientOne}
						gradientTwo={project.gradientTwo}
					/>
				))
				.reverse()}
		</Tab.Panel>
	</Tab.Panels>
</Tab.Group>; */
}

export default Projects;
