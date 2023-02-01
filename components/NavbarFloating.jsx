import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";

const NavbarFloating = ({ view }) => {
	const [showFloatingNav, setShowFloatingNav] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const handleShowFloatingNav = () => {
			window.scrollY >= window.screen.height / 10
				? setShowFloatingNav(true)
				: setShowFloatingNav(false);
		};

		window.addEventListener("scroll", handleShowFloatingNav);
	}, []);

	return (
		<div
			className={clsx(
				"floating-nav ease-in duration-200",
				showFloatingNav
					? "!opacity-1 !scale-75 translate-y-0 -translate-x-[50%]"
					: "!opacity-0 !scale-50 !pointer-events-none translate-y-full -translate-x-[50%]",
				isHovered ? "!scale-100 -translate-x-[50%]" : "!scale-75 -translate-x-[50%]"
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<a href="/#home" className={view === "home" ? "active !bg-main !text-white" : ""}>
				<AiOutlineHome />
			</a>
			<a href="/#about" className={view === "about" ? "active !bg-main !text-white" : ""}>
				<AiOutlineUser />
			</a>
			<a href="/#skills" className={view === "skills" ? "active !bg-main !text-white" : ""}>
				<BsCardChecklist />
			</a>
			<a
				href="#projects"
				className={view === "projects" ? "active !bg-main !text-white" : ""}
			>
				<BiBook />
			</a>
			<a href="#contact" className={view === "contact" ? "active !bg-main !text-white" : ""}>
				<BiMessageSquareDetail />
			</a>
		</div>
	);
};

export default NavbarFloating;
