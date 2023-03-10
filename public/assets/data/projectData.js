import coverLakefrontLodging from "../../../public/assets/projects/lakefrontLodging.png";
import coverAutomotiveInnovations from "../../../public/assets/projects/automotiveInnovations.png";
import coverPuffin from "../../../public/assets/projects/puffin.png";
import coverPokedex from "../../../public/assets/projects/pokedex.png";
import coverGameDatabase from "../../../public/assets/projects/gameDatabaseAssets/gameDatabaseThumb.png";
import coverPlanets3d from "../../../public/assets/projects/planets3dAssets/planets3dThumb.png";
import coverSpotifyPlayer from "../../../public/assets/projects/spotifyAssets/spotifyPlayerThumb.png";
import coverZustech from "../../../public/assets/projects/z.png";
import coverNuggets from "../../../public/assets/projects/nuggetsAssets/nuggetsCover.png";
import coverSpl from "../../../public/assets/projects/sp/sp-library.png";
import coverAiReply from "../../../public/assets/projects/aiReplyAssets/aiThumb.png";

const projectData = [
	{
		title: "Lakefront Lodging",
		type: "personal",
		image: coverLakefrontLodging,
		pageLink: "/projects/lakefront-lodging",
		link: "",
		demo: "http://lakefrontlodging.epizy.com/",
		gradientOne: "#21b164",
		gradientTwo: "#969f97",
		modaltitle: "A hotel reservation site",
		modalText:
			"Users can sign in and book selected rooms with the information stored into the database for all guests.",
	},
	{
		title: "Automotive Innovations",
		type: "personal",
		image: coverAutomotiveInnovations,
		pageLink: "/projects/automotive-innovations",
		link: "https://github.com/aj2967/front-end-assignment",
		demo: "https://automotive-innovations.netlify.app/index.html",
		gradientOne: "#63bc73",
		gradientTwo: "#09ae27a7",
		modaltitle: "Curated content for car enthusiasts",
		modalText:
			"A responsive front-end developed website that serves as a platform to congregate and deliver engaging news and articles.",
	},
	{
		title: "Puffin Group",
		type: "work",
		image: coverPuffin,
		pageLink: "/projects/puffin",
		link: "",
		demo: "",
		gradientOne: "#3857d1",
		gradientTwo: "#0e9eaca7",
		modaltitle: "Baby monitoring device dashboard",
		modalText: "",
	},
	{
		title: "Pokedex",
		type: "personal",
		image: coverPokedex,
		pageLink: "/projects/pokedex",
		link: "",
		demo: "https://aj2967.github.io/pokemon/",
		gradientOne: "#bc0909",
		gradientTwo: "#ffc2c2",
		modaltitle: "An index of over 800 pokemons to view from",
		modalText: `A small project created using React Js and PokeAPI. Users are able to view all pokemons and view the pokemon's individual stats.`,
	},
	{
		title: "Game Database",
		type: "personal",
		image: coverGameDatabase,
		pageLink: "/projects/game-database",
		link: "",
		demo: "https://aj2967.github.io/games-database/",
		gradientOne: "#1a14be",
		gradientTwo: "#272b71",
		modaltitle: "Game details from a huge database collection",
		modalText: `Users curious about getting details for a game are able to search using the data provided by RAWG's API and find a variety of information or filter their search for finding something close to their needs.`,
	},
	{
		title: "Planets 3D",
		type: "personal",
		image: coverPlanets3d,
		pageLink: "/projects/planets-3d",
		link: "",
		demo: "https://aj2967.github.io/planets-3d/",
		gradientOne: "#3a45c3",
		gradientTwo: "#73a4b8",
		modaltitle: "Models of planets in 3D",
		modalText: `This app has been made using ReactJS and React Three Fiber. React Three Fiber is a component based library that builds off ThreeJS for 3D rendering. Providing an area which can be display the current universal planet which have been realistically presented by applying different textures to the mesh. The models can be viewed from any angle. Additionally, the space can be controlled and seen in more detail using the React Three Drei plugin.`,
	},
	{
		title: "Spotify Player",
		type: "personal",
		image: coverSpotifyPlayer,
		pageLink: "/projects/spotify-player",
		link: "https://github.com/aj2967/spotify-player",
		demo: "https://aj2967.github.io/spotify-player/",
		gradientOne: "#1db954",
		gradientTwo: "#6ab385",
		modaltitle: "Music player using Spotify API",
		modalText: `Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. The app I created allows users to explore a variety of songs, providing a 30 second demo of each song in the track to allow the users to have a feel for what this music app would offer them if they were to purchase the subscription.`,
	},
	{
		title: "Zustech",
		type: "work",
		image: coverZustech,
		pageLink: "/projects/zustech",
		link: "",
		demo: "",
		gradientOne: "#1d59b9",
		gradientTwo: "#55a3df",
		modaltitle: "Learning management system",
		modalText: ``,
	},
	{
		title: "Nuggets Widget",
		type: "work",
		image: coverNuggets,
		pageLink: "/projects/nuggets",
		link: "",
		demo: "",
		gradientOne: "#1d59b9",
		gradientTwo: "#55a3df",
		modaltitle: "Review snippets widget",
		modalText: ``,
	},
	{
		title: "Social Proof Library",
		type: "work",
		image: coverSpl,
		pageLink: "/projects/sp-library",
		link: "",
		demo: "",
		gradientOne: "#1d59b9",
		gradientTwo: "#55a3df",
		modaltitle: "Social proof management library",
		modalText: ``,
	},
	{
		title: "Reply With AI",
		type: "work",
		image: coverAiReply,
		pageLink: "/projects/ai-reply",
		link: "",
		demo: "example.com",
		gradientOne: "#1d59b9",
		gradientTwo: "#55a3df",
		modaltitle: "AI review reply powered by ChatGPT 3",
		modalText: ``,
	},
];

export default projectData;
