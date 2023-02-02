import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/pokedex.jpg";

const pokedex = () => {
	return (
		<ProjectContainer
			title="Pokedex"
			image={cover}
			languages={["HTML", "SASS", "React"]}
			objectives={[
				"Allow users to view all 800 different Pokemons in a user-friendly interface",
				"Provide the ability to filter Pokemons based on various criteria (e.g. water, grass)",
				"Enable users to search for specific Pokemons by name or number",
				"Display comprehensive information for each Pokemon (e.g. stats, abilities, moves)",
				"Provide an intuitive and responsive design for an enjoyable user experience.",
			]}
			overview="A small project created using React Js and PokeAPI. Users are able to view all pokemons and view the pokemon's individual stats."
			demo="https://aj2967.github.io/pokemon/"
			code="https://github.com/aj2967/pokemon"
		></ProjectContainer>
	);
};

export default pokedex;
    