import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/pokedex.jpg";

const pokedex = () => {
	return (
		<ProjectContainer
			title="Pokedex"
			languages={["HTML", "SASS", "React"]}
			image={cover}
			overview="A small project created using React Js and PokeAPI. Users are able to view all pokemons and view the pokemon's individual stats."
			demo="https://aj2967.github.io/pokemon/"
			code="https://github.com/aj2967/pokemon"
		></ProjectContainer>
	);
};

export default pokedex;
    