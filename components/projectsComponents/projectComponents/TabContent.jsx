import React from "react";
import { motion } from "framer-motion";

import projectData from "../../../public/assets/data/projectData";
import ProjectItem from "../../ProjectItem";

const tabContentVariant = {
	active: {
		display: "block",
		transition: {
			staggerChildren: 0.15,
		},
	},
	inactive: {
		display: "none",
	},
};

const cardVariant = {
	active: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
	inactive: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 0.5,
		},
	},
};
const TabContent = ({ id, active, type }) => (
	<motion.div
		role="tabpanel"
		id={id}
		className="tab-content"
		variants={tabContentVariant}
		animate={active ? "active" : "inactive"}
		initial="inactive"
	>
		<div className="grid md:grid-cols-3 gap-8">
			{projectData
				.filter((project) => project.type === type)
				.map((project, index) => (
					<motion.div key={index} variants={cardVariant}>
						<ProjectItem
							key={index}
							title={project.title}
							brief={project.modaltitle}
							bg={project.image}
							url={project.pageLink}
							demo={project.demo}
							type={project.type}
							gradientOne={project.gradientOne}
							gradientTwo={project.gradientTwo}
						/>
					</motion.div>
				))
				.reverse()}
		</div>
	</motion.div>
);

export default TabContent;
