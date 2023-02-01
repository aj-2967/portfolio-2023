import clsx from "clsx";
import Link from "next/link";
import React from "react";

const ButtonRounded = ({ icon, link = "/", newTab = false, animate = false, delay = 0 }) => {
	return (
		<Link
			target={newTab ? "_blank" : ""}
			href={link}
			className={clsx(
				"rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200",
				animate && "animate-[pulse_1s_ease-in_1_alternate-reverse]"
			)}
			style={{ animationDelay: delay ? `${delay}s` : "0s" }}
		>
			{icon}
		</Link>
	);
};

export default ButtonRounded;
