import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/lakefrontLodging.png";

const lakefrontLodging = () => {
	return (
		<ProjectContainer
			title="LakeFront Lodging"
			languages={["HTML", "CSS", "Php", "JavaScript", "MySQL"]}
			image={cover}
			// overview="Users can sign in and book selected rooms with the information stored into the database for all guests."
			overview="The purpose of this website is to establish bookings. It's made to be simple for users to navigate through and make reservations for their desired hotels from the available selection. I created this website for my final year university project invlolving both front-end design and back-end database aspects."
			demo="http://lakefrontlodging.epizy.com/"
		>
		</ProjectContainer>
	);
};

export default lakefrontLodging;
