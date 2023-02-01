import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
	const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

	const onTabClick = (index) => {
		setActiveTabIndex(index);
	};

	useEffect(() => {
		document.documentElement.style.setProperty("--active-color", tabs[activeTabIndex].color);
	}, [activeTabIndex, tabs]);

	// Default to a tab based on the URL hash value
	useEffect(() => {
		const tabFromHash = tabs.findIndex((tab) => `#${tab.id}` === window.location.hash);
		setActiveTabIndex(tabFromHash !== -1 ? tabFromHash : defaultIndex);
	}, [tabs, defaultIndex]);

	const tabVariant = {
		active: {
			width: "55%",
			transition: {
				type: "tween",
				duration: 0.4,
			},
		},
		inactive: {
			width: "15%",
			transition: {
				type: "tween",
				duration: 0.4,
			},
		},
	};

	const tabTextVariant = {
		active: {
			opacity: 1,
			x: 0,
			display: "block",
			transition: {
				type: "tween",
				duration: 0.3,
				delay: 0.3,
			},
		},
		inactive: {
			opacity: 0,
			x: -30,
			transition: {
				type: "tween",
				duration: 0.3,
				delay: 0.1,
			},
			transitionEnd: { display: "none" },
		},
	};

	return (
		<div>
			<ul
				className="p-0 mt-0 mx-auto mb-[20px] flex justify-end max-w-[400px]"
				role="tablist"
			>
				{tabs.map((tab, index) => (
					<motion.li
						key={tab.id}
						className={clsx("tab max-w-[400px]", { active: activeTabIndex === index })}
						role="presentation"
						variants={tabVariant}
						animate={activeTabIndex === index ? "active" : "inactive"}
					>
						<a href={`#${tab.id}`} onClick={() => onTabClick(index)}>
							{tab.icon}
							<motion.span variants={tabTextVariant}>
								<span className="">{tab.title}</span>
							</motion.span>
						</a>
					</motion.li>
				))}
			</ul>
			{tabs.map((tab, index) => (
				<tab.content
					role="tabpanel"
					key={tab.id}
					id={`${tab.id}-content`}
					active={activeTabIndex === index}
					type={tab.type}
				>
					{tab.content}
				</tab.content>
			))}
		</div>
	);
};

export default TabComponent;
