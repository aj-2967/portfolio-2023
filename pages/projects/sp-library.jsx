import { Tab } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/sp/sp-library.png";

// Tabs
import NuggetsWidget from "../../components/projectsComponents/nuggets/NuggetsWidget";
// import nugget2 from "../../public/assets/projects/nuggets/nugget2.png";

const SpLibrary = () => {
	return (
		<ProjectContainer
			title="Social Proof Library"
			image={cover}
			languages={["HTML", "CSS", "jQuery", "AngularJS", "Php", "Laravel", "MySQL"]}
			objectives={[
				"View all created social proof images in one place",
				"Show auto generated banners on the page on every visit",
				"Dropdown for each image that does the following: Download, Scan QR Code, Integrated with REVIEWS.io widgets, Send to WhatsApp",
			]}
			overview="The Social Proof Library allows you to view all of the Social Proof Images that you have previously created. You can use the library to download your Social Proof Banners for posting on social networks or send them to yourself via WhatsApp. The smoothest new functionality of our Social Proof Library is that you can add banners to the Social Proof Carousel..."
		>
			<div className="w-full sm:px-0">
				<p>
					The new Social Proof Library has been launched in your dashboard to give you
					even more flexibility in creating beautiful banners from your hard-earned
					reviews. You will find now not only the images you created yourself in the
					library, but also auto-generated banners from reviews that meet specific
					criteria (around rating, word count and more)
				</p>
			</div>
		</ProjectContainer>
	);
};

export default SpLibrary;
