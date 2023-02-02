import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/gameDatabaseAssets/gameDatabaseCover.png";

const gameDatabase = () => {
  return (
		<ProjectContainer
			title="Game Database"
			image={cover}
			languages={["HTML", "SASS", "React"]}
			objectives={[
				"Provide users with an interface to search for games from a massive multi-platform database",
				"Allow users to filter their search by various criteria (e.g. release date, platform, genre)",
				"Display comprehensive information for each game, such as release date, platform, genre, description, and ratings",
				"Group DLC's and add-ons together with the main game",
			]}
			overview="Users curious about getting details for a game are able to search using the data provided by RAWG's API and find a variety of information or filter their search for finding something close to their needs."
			demo="https://aj2967.github.io/games-database/"
			code="https://github.com/aj2967/games-database"
		></ProjectContainer>
  );
}

export default gameDatabase