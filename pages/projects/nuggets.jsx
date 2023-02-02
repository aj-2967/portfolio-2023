import { Tab } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/nuggetsAssets/nuggetsCover.png";

// Tabs
import NuggetsWidget from "../../components/projectsComponents/nuggets/NuggetsWidget";
import nugget2 from "../../public/assets/projects/nuggetsAssets/nugget2.png";
import nugget3 from "../../public/assets/projects/nuggetsAssets/nugget3.png";
import nugget4 from "../../public/assets/projects/nuggetsAssets/nugget4.png";
import NuggetsEditor1 from "../../public/assets/projects/nuggetsAssets/nuggets-editor-1.png";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const nuggets = () => {
	let [nuggetsTabs] = useState({
		"Nuggets Widget": {
			title: "Nuggets Widget",
			image: nugget2,
			description: [
				`Sometimes a review contains a sentence you desperately want your audience to read - the kind of sentence that perfectly sums up a key selling feature of a product or service. But how do you make those golden nuggets of review content stand out? You use the newest addition to our library of lightning fast widgets.`,
				`With the Review Nuggets Widget, you can pull out those parts that are valuable to the reader to improve their on-site experience. Instead of being deterred by a lengthy review they don’t have time to read, they get the easily digestible highlights.`,
			],
			// component: <NuggetsWidget />,
		},
		"Nuggets Bar": {
			title: "Nuggets Bar Widget",
			image: nugget4,
			description: [
				`With such a small form factor, there was potential in showcasing reviews in another, more prominent way. Namely, an inline or sticky bar at the top/ bottom of any client's page. The Nuggets Bar widget provides a more eye catching method of presenting reviews our clients are most proud of, potentially leading to an increased conversion of sales as this version of the widget can be more readily displayed on most or all of the pages on a site.`,
				`The process of creating this widget used the same build file that contained the logic for the standard Nuggets widget. Which made it easier to share the same functionality and components required for this version. This hovever also presented a few challenges, such as being unable to distinguish between these two different versions, resulting in the wrong configs of the user's options and styles being injected into the wrong widgets, or being unable to render both versions of the widgets on the same page for a single user. But `,
			],
		},
		"Nuggets Editor": {
			title: "Nuggets Editor & Customizer",
			image: NuggetsEditor1,
			description: [
				`Users can create a nuggets widget using the nuggets widget customiser which provides a wide variety of customisations and generates HTML/JS code required to install a widget on clients' websites.`,
			],
		},
		"Nugget Opportunities": {
			title: "Nugget Opportunities",
			image: nugget2,
			isVideo: true,
			description: [
				`With the new 'Opportunities'-tab within our Nuggets feature you will find a list of how many reviews and nuggets each product has. It helps you identify products without nuggets.`,
				`The nugget opportunities tab shows you a list of products with and without nuggets, making it easier for you to find products missing review nuggets. This list will include - Product Image, Product Name, Rating, Review Count, Nuggets created, Product SKU. From here, you can search for specific products and click on the reviews to create your nuggets.`,
			],
		},
		"Automated Nuggets": {
			title: "Automated Nuggets",
			image: nugget2,
			description: [
				`Our AI system analyses new reviews and suggests snippets that could be turned into Review Nuggets. You may approve or delete the suggestion and then activate/deactivate them in the product- or company tab.`,
			],
		},
	});

	return (
		<ProjectContainer
			title="Nuggets Widget"
			image={cover}
			languages={[
				"HTML",
				"CSS",
				"jQuery",
				"React",
				"TypeScript",
				"AngularJS",
				"Php",
				"Laravel",
				"MySQL",
			]}
			objectives={[
				"Create a reviews widget with mutliple style and option configurations",
				"Create an interface in the dashboard to allow users to select their most relevant part of the review",
				"Create an enpoint for the widget to call to display a review",
				"Save and query the database for the added review snnippets",
				"Create an editor for the widget to give users the control of how they want the widget to be styled",
			]}
			overview="The Review Nuggets Widget lets you draw the most value from a review by selecting a snippet of it to publish as standalone content - separating key sentiment from ‘noise’. You still get the same verified authenticity of the complete review, but you allow its most powerful words to shine."
		>
			<div className="w-full sm:px-0">
				<Tab.Group>
					<Tab.List className="flex space-x-1 rounded-xl p-1">
						{Object.keys(nuggetsTabs).map((tabName) => (
							<Tab
								key={tabName}
								className={({ selected }) =>
									classNames(
										"w-full rounded-sm py-2.5 text-sm font-medium leading-5 shadow-none focus:outline-none",
										"",
										selected ? "text-main" : "text-black"
									)
								}
							>
								{tabName}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="mt-2 pt-4 border-t-2 border-gray-400 w-full">
						{Object.values(nuggetsTabs).map(
							(
								{ title, image, description, desc, desc2, component, isVideo },
								index
							) => (
								<Tab.Panel key={index} className="flex-col">
									<div
										className={clsx(
											"rounded-xl p-3 flex flex-col lg:flex-row w-full justify-around",
											index % 2 == 0 ? "" : "lg:flex-row-reverse"
										)}
									>
										<div className="lg:w-[50%]">
											<Image src={image} alt="Nuggets Project" />
										</div>
										<div className="lg:w-[40%]">
											<h2 className="font-[400] mb-4 mt-4 lg:mt-0">
												{title}
											</h2>
											{description &&
												description.map((text, index) => (
													<div key={index}>
														<p>{text}</p>
														<br />
													</div>
												))}
										</div>
									</div>
									<div>{component && component}</div>
								</Tab.Panel>
							)
						)}
					</Tab.Panels>
				</Tab.Group>
			</div>
		</ProjectContainer>
	);
};

export default nuggets;
