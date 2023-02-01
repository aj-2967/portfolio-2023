import ProjectContainer from "../../components/ProjectContainer";
import ImageDescription from "../../components/ImageDescription";

import cover from "../../public/assets/projects/z.png";
import manageCourse from "../../public/assets/projects/zustech/manageCourse.gif";
import manageCourseSearch from "../../public/assets/projects/zustech/manageCourseSearch.gif";
import player from "../../public/assets/projects/zustech/player.gif";
import playerExtra from "../../public/assets/projects/zustech/playerExtra.gif";
import responsiveness from "../../public/assets/projects/zustech/responsiveness.gif";
import debounce from "../../public/assets/projects/zustech/debounce.gif";

const zustech = () => {
	const description = [
		{
			title: "Play Curated Content",
			image: player,
			description:
				"Created the video player and sidebar functionality where students consume the content of their desired course, the sidebar contains all modules and lessons related to the course and the student may play a video based on the lesson they selected to watch.",
		},
		{
			title: "Additional Course Information",
			image: playerExtra,
			description:
				"Implemented tabs under the player that contain all relevant information related to the course such as; the course overview, any new course announcements or lesson transcripts if available.",
		},
		{
			title: "Manage Instructor's Courses",
			image: manageCourse,
			description:
				"Developed the instructor interface for managing courses with the team. Resolved issues where details of the course were not being displayed when clicked on the edit button and added popups and implemented delete course endpoint to confirm deletion.",
		},
		{
			title: "Search For Courses",
			image: manageCourseSearch,
			description:
				"Allow instructors to view all courses they have created and to fetch courses they search for and display on the webpage.",
		},
		{
			title: "Optimised for any screen",
			image: responsiveness,
			description:
				"Fixed styling issues on most of the pages and optimised for mobile responsiveness for a friendlier user experience.",
		},
		{
			title: "Debouncing Search",
			image: debounce,
			description:
				"Implemented requirements for filtering and searching all the courses available on the website to be displayed at the course marketplace, using debouncing function for reducing load on each api call and ease burden off the server.",
		},
	];

	return (
		<ProjectContainer
			title="Zustech"
			languages={["HTML", "SASS", "React"]}
			image={cover}
			overview={`
				Zustech Ltd is currently developing a learning
				management system (LMS). On this platform once
				completed, users after subscribing will be able to use
				their membership to access and complete any course from
				any given category.
				
				
				My role as a Frontend React Developer was to work
				closely with the team and the clients to develop the
				vision of the team into an effective user experience, as demonstrated below.
			`}
		>
			<div>
				{description &&
					description.map(({ title, image, description }, index) => (
						<ImageDescription
							key={index}
							title={title}
							image={image}
							description={description}
						/>
					))}
			</div>
		</ProjectContainer>
	);
};

export default zustech;
