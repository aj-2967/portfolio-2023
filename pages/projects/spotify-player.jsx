import ProjectContainer from "../../components/ProjectContainer";
import cover from "../../public/assets/projects/spotifyAssets/spotifyPlayerCover.png";

const spotifyPlayer = () => {
	return (
		<ProjectContainer
			title="Spotify"
			languages={["HTML", "SASS", "React"]}
			image={cover}
			overview="Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. The app I created allows users to explore a variety of songs, providing a 30 second demo of each song in the track to allow the users to have a feel for what this music app would offer them if they were to purchase the subscription."
			demo="https://aj2967.github.io/spotify-player/"
			code="https://github.com/aj2967/spotify-player"
		></ProjectContainer>
	);
};

export default spotifyPlayer;