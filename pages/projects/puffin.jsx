import { Tab } from "@headlessui/react";
import { useState } from "react";
import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/puffinSvg.svg";
import puffinGroupImg from "../../public/assets/projects/puffin-group.png";
import puffinClubImg from "../../public/assets/projects/puffin-club.png";
import myPuffinImg from "../../public/assets/projects/my-puffin.png";
import Image from "next/image";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const puffin = () => {
	let [thePuffinGroup] = useState({
		"Puffin Group": {
			title: "Brand Intro and e-Commerce",
			image: puffinGroupImg,
			description: `Puffin would be a website where the customer is able
							to browse, filter and buy Puffin products. This
							website introduces potential customers to what
							Puffin is about by adding the products and writing
							their mission statement. As well as having a contact
							page where those interested can find out more and
							also has links to redirect you to other Puffin
							websites.`,
		},

		"Puffin Club": {
			title: "Up to Date Blogs",
			image: puffinClubImg,
			description: `Puffin Club was a blog site that allowed Puffin
							members to keep updated with its newest technologies
							and information.`,
		},

		"My Puffin": {
			title: "Updates on Baby Health",
			image: myPuffinImg,
			description: `My Puffin is the client portal for members. This
							website shows data taken from the device and
							displays it onto the pages which include the patient
							(baby), the parent/guardian details and results
							represented by using graphs and charts in a readable
							and understandable way.`,
		},
	});

	return (
		<ProjectContainer
			title="Puffin Group"
			languages={["HTML", "CSS", "C#", "ASP .Net"]}
			image={cover}
			overview="This was a project where I was required to
						alongside another graduate to design and create a prototype
						website for the company Future Care’s product, Puffin.
						Puffin is a brand for baby monitoring devices. We
						designed and created the front-end of an e-commerce
						website and began development into the back-end by
						creating a login system. The project entailed developing
						three websites relating to the brand called Puffin
						Group, Puffin Club and My Puffin."
		>
			<div className="w-full sm:px-0">
				<Tab.Group>
					<Tab.List className="flex space-x-1 rounded-xl p-1">
						{Object.keys(thePuffinGroup).map((tabName) => (
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
						{Object.values(thePuffinGroup).map(
							({ id, title, image, description }, index) => (
								<Tab.Panel key={index} className="rounded-xl p-3 flex flex-col lg:flex-row w-full justify-around">
									<div className="lg:w-[60%]">
										<Image src={image} alt={title} />
									</div>
									<div className="lg:w-[30%]">
										<h2 className="font-[400] mb-4 mt-4 lg:mt-0">{title}</h2>
										<p>{description}</p>
									</div>
								</Tab.Panel>
							)
						)}
					</Tab.Panels>
				</Tab.Group>
			</div>
		</ProjectContainer>
	);
};

export default puffin;
