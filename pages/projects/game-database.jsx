import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/gameDatabaseAssets/gameDatabaseCover.png";

const gameDatabase = () => {
  return (
		<ProjectContainer
			title="Game Database"
			languages={["HTML", "SASS", "React"]}
			image={cover}
			overview="Users curious about getting details for a game are able to search using the data provided by RAWG's API and find a variety of information or filter their search for finding something close to their needs."
			demo="https://aj2967.github.io/games-database/"
			code="https://github.com/aj2967/games-database"
		></ProjectContainer>
  );
}

export default gameDatabase