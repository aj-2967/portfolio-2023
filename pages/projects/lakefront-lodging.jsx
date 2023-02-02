import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/lakefrontLodging.png";

const lakefrontLodging = () => {
	return (
		<ProjectContainer
			title="LakeFront Lodging"
			image={cover}
			languages={["HTML", "CSS", "Php", "JavaScript", "MySQL"]}
			objectives={[
				"Provide an easy and intuitive platform for users to search and book accommodations",
				"Offer a wide range of properties and destinations to cater to different customer needs and preferences",
				"Create a protected admin panel to manage customers and bookings through the same portal",
			]}
			overview="The purpose of this website is to establish bookings. It's made to be simple for users to navigate through and make reservations for their desired hotels from the available selection. I created this website for my final year university project invlolving both front-end design and back-end database aspects."
			demo="http://lakefrontlodging.epizy.com/"
		></ProjectContainer>
	);
};

export default lakefrontLodging;
