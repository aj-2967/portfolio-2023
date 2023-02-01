import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectItem = ({
	title,
	brief,
	bg,
	url,
	demo,
	type,
	gradientOne = "#5651E5",
	gradientTwo = "#709DFF",
}) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<div
			// className={`relative flex items-center justify-center h-64 w-full bg-cover shadow-xl shadow-gray-400 rounded-xl p-4 group hover:transition-all hover:ease-in hover:duration-200 hover:bg-gradient-to-r from-main to-[#34d0be]`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={clsx(
				"relative flex items-center justify-center h-64 w-full bg-cover shadow-xl shadow-gray-400 rounded-xl p-4 group hover:transition-all hover:ease-in hover:duration-200 hover:bg-gradient-to-r from-main to-[#34d0be]"
			)}
			// style={{
			// 	background: isHover
			// 		? `linear-gradient(to right, ${gradientOne}, ${gradientTwo})`
			// 		: "rgb(255,255,255)",
			// }}
		>
			<Image
				className="rounded-xl group-hover:opacity-10 p-4"
				style={{ objectFit: "cover", objectPosition: "center", borderRadius: 25 }}
				src={bg}
				alt="/"
				fill
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
				<p className="pb-4 pt-2 text-white text-center">{brief}</p>
				<div className="flex gap-2 justify-center items-center">
					<Link href={url}>
						<p className="text-center py-3 px-5 rounded-lg bg-white text-gray-700 font-medium text-lg cursor-pointer hover:scale-105 transition-transform duration-150 ease-in">
							Info
						</p>
					</Link>
					{demo && (
						<Link href={demo} target="_blank">
							<p className="text-center py-2.5 px-2 rounded-lg bg-transparent text-white font-medium text-lg cursor-pointer border-2 hover:scale-105 transition-transform duration-150 ease-in">
								Demo
							</p>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
