import React from "react";

const Tag = ({ language }) => {
	const languages = {
		HTML: "#E44C27",
		CSS: "#1572B7",
		SASS: "#CD6799",
		Tailwind: "#07B6D5",
		JavaScript: "#F7DF1E",
		jQuery: "#0769AD",
		React: "#61DAFB",
		ThreeJS: "#5CAD41",
		TypeScript: "#007ACC",
		AngularJS: "#DD0031",
		"ASP .Net": "#3460A6",
		"C#": "#953DAC",
		Php: "#777BB3",
		Laravel: "#F35045",
		MySQL: "#00758F",
	};

	return (
		<div
			className="px-2 py-1 rounded text-sm"
			style={{
				backgroundColor: languages[language],
				color: language === "JavaScript" ? "black" : "white",
                // textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
			}}
		>
			{language}
		</div>
	);
};

export default Tag;
