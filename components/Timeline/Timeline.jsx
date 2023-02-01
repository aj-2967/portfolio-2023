import { motion } from "framer-motion";

import TimelineItem from "./TimelineItem";
import timelineData from "../../public/assets/data/timelineData";

const Timeline = () => {
	const variant = {
		hidden: {
            opacity: 0,
            y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
                when: 'beforeChildren',
				staggerChildren: 0.15,
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			className="timeline-container"
			variants={variant}
			initial="hidden"
			animate="visible"
		>
			{timelineData
				.map((data, index) => (
					<TimelineItem key={index} data={data} />
				))
				.reverse()}
		</motion.div>
	);
};

export default Timeline;
