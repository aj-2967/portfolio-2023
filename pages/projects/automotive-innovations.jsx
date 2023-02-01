import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/automotiveInnovations-logo.jpg";

const automotiveInnovations = () => {
	return (
		<ProjectContainer
			title="Automotive Innovations"
			languages={["HTML", "CSS", "JavaScript"]}
			image={cover}
			overview="As there are a lot of advancements in the automobile industry, this website aims to target car enthusiasts and various persons interested in the upcoming innovations and serves as a platform to congreagate and deliver engaging news and articles."
			demo="https://automotive-innovations.netlify.app/index.html"
		></ProjectContainer>
	);
};

export default automotiveInnovations;
