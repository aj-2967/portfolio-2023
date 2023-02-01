import Image from "next/image";

const NuggetsWidget = ({ image, title, description }) => {
	// explain what I did to make this widget
    // explain how I made use of the technologies
	return (
		<>
			<div className="lg:w-[60%]">
				<Image src={image} alt="Nuggets Widget" />
			</div>
			<div className="lg:w-[30%]">
				<h2 className="font-[400] mb-4 mt-4 lg:mt-0">hello</h2>
				<p>{description}</p>
			</div>
		</>
	);
};

export default NuggetsWidget;
