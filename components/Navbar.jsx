import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
	const router = useRouter();

	const [nav, setNav] = useState(false);
	const [hideNav, setHideNav] = useState(false);
	const [y, setY] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("");
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#ECF0F3");
	const [linkColor, setLinkColor] = useState("#1F2937");

	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setScrollDirection("up");
			} else if (y < window.scrollY) {
				setScrollDirection("down");
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	useEffect(() => {
		if (router.asPath.includes("/projects")) {
			setNavBg("transparent");
			setLinkColor("#ECF0F3");
			setShadow(false);
			setHideNav(true);
		} else {
			setNavBg("#ECF0F3");
			setLinkColor("#1F2937");
			setHideNav(false);
		}
	}, [router]);

	useEffect(() => {
		const handleShadow = () => {
			window.scrollY >= 90 ? setShadow(true) : setShadow(false);
		};

		window.addEventListener("scroll", handleShadow);
	}, []);

	useEffect(() => {
		window.innerWidth > 767 && setNav(false);
	}, [nav]);

	const handleNav = () => setNav(!nav);

	if (hideNav) return;
	return (
		<div
			style={{ background: `${navBg}` }}
			className={clsx(
				"fixed w-full h-20 z-[100] ease-in duration-200",
				shadow && "shadow-xl",
				!nav && y >= 40 && scrollDirection === "down" ? "-translate-y-full" : ""
			)}
		>
			{/* Standard Nav Menu */}
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					{/* <Image
						className={clsx(
							"opacity-0 transition-opacity duration-300 ease-in",
							y < 10 ? "opacity-0" : "opacity-100"
						)}
						src="/../public/assets/logo.png"
						alt=""
						height="125"
						width="50"
					/> */}
				</Link>
				<div>
					<ul
						className="navigation-links hidden md:flex gap-2 pr-2"
						style={{ color: `${linkColor}` }}
					>
						<Link href="/#home">
							<li>
								<b
									className={clsx(
										"text-sm uppercase inline-block font-medium",
										router.pathname == "/" ? "active" : ""
									)}
								>
									Home
								</b>
							</li>
						</Link>
						<Link href="/cv">
							<li>
								<b
									className={clsx(
										"text-sm uppercase inline-block font-medium",
										router.pathname == "/cv" ? "active" : ""
									)}
								>
									CV
								</b>
							</li>
						</Link>
					</ul>
					<div className="md:hidden cursor-pointer" onClick={handleNav}>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Nav Menu */}
			<div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 !z-[1000]" : ""}>
				<div
					className={clsx(
						"fixed p-10 ease-in duration-300",
						nav
							? "fixed right-0 top-0 w-full sm:w-[50%] md:w-[45%] h-screen bg-[#ECF0F3]"
							: "fixed right-[-100%] top-0 w-0"
					)}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<h2 className="text-main font-medium">Portfolio</h2>
							</Link>
							<div
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
								onClick={handleNav}
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let's build something legendary together.
							</p>
						</div>
					</div>

					{/* Mobile Links */}
					<div className="py-4 flex flex-col justify-between h-[80%]">
						<ul className="uppercase w-full text-3xl">
							<Link href="/#home">
								<li className="py-4 flex justify-end" onClick={() => setNav(false)}>
									Home
								</li>
							</Link>
							<Link href="/cv">
								<li className="py-4 flex justify-end" onClick={() => setNav(false)}>
									CV
								</li>
							</Link>
						</ul>

						{/* Social Links */}
						<div className="">
							<p className="uppercase tracking-widest text-main">Connect</p>
							<div className="flex items-center justify-between my-4">
								{/* <ButtonRounded icon={<FaLinkedinIn />} /> */}
								{/* <ButtonRounded icon={<FaGithub />} /> */}
								{/* <ButtonRounded icon={<AiOutlineMail />} /> */}
								{/* <ButtonRounded icon={<BsFillPersonLinesFill />} /> */}
								<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
									<a href="https://www.linkedin.com/in/aj2967/" target="_blank">
										<FaLinkedinIn size={20} />
									</a>
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
									<a href="https://github.com/aj2967" target="_blank">
										<FaGithub size={20} />
									</a>
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
									<a href="mailto:aj2967@hotmail.com" target="_blank">
										<AiOutlineMail size={22} />
									</a>
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
									<a href="#">
										<BsFillPersonLinesFill scale={22} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
