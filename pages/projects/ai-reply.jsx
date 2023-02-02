import { Tab } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/aiReplyAssets/aiThumb.png";

const aiReply = () => {
	return (
		<ProjectContainer
			title="Reply With AI"
			image={cover}
			languages={["HTML", "CSS", "jQuery", "AngularJS", "Php", "Laravel", "MySQL"]}
			objectives={[
				"Use of GPT technology to generate timely and accurate responses to customer reviews",
				"Minimize response time to improve customer satisfaction",
				"Increased efficiency in managing customer feedback",
				"Integration in the client's timeline of customer reviews",
				"Moderate reviews for a safer user experience",
			]}
			overview="AI Reply for reviews and feedback makes it super easy for businesses to respond to customer reviews without breaking a sweat. With the help of our newest feature, you can use the chatGPT technology to generate responses to customer reviews in just a few minutes. No more spending hours crafting the perfect response. Now, you can focus on other important tasks, like improving your products or services."
			demo="example.com"
		>
			<div className="w-full sm:px-0"></div>
		</ProjectContainer>
	);
};

export default aiReply;
