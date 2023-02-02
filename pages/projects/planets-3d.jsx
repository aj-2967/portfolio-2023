import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/planets3dAssets/planets3dCover.png";

const planets3d = () => {
	return (
		<ProjectContainer
			title="Planets 3D"
			image={cover}
			languages={["HTML", "SASS", "React", "ThreeJS"]}
			objectives={[
				"Provide an interactive 3D representation of the Earth's moon and the planets in the solar system",
				"Enable users to view the textures and features of each planet and moon up close",
				"Allow users to rotate and zoom in on each object in the solar system for a more immersive experience",
			]}
			overview="This app has been made using ReactJS and React Three Fiber. React Three Fiber is a component based library that builds off ThreeJS for 3D rendering. Providing an area which can be display the current universal planet which have been realistically presented by applying different textures to the mesh. The models can be viewed from any angle. Additionally, the space can be controlled and seen in more detail using the React Three Drei plugin."
			demo="https://aj2967.github.io/planets-3d/"
			code="https://github.com/aj2967/planets-3d"
		></ProjectContainer>
	);
};

export default planets3d;
