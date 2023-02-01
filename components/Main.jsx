import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ButtonRounded from "./ButtonRounded";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div className="my-container">
					{/* <p className="uppercase text=sm tracking-widest text-gray-600">
						LETS BUILD SOMETHING TOGETHER
					</p> */}
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-main">AJ</span>
					</h1>

					<div className="group">
						<h1 className="mb-1 font-mono text-4xl text-gray-800 md:text-6xl">
							A Fullstack <br className="block md:hidden" />
							<span className="font-mono inline-flex h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent will-change-transform">
								Developer
							</span>
							<span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-gray-800 md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
						</h1>
					</div>
					{/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
						A highly resolute graduate academic skills specializing in Computer Science
						who does not shy away from responsibility. I can stay motivated in relaxed
						environments and work comfortably under pressure. Always willing to learn
						new things and can display commitment in every instance.
					</p> */}

					{/* Social Links */}
					<div className="flex items-center justify-between gap-4 max-w-[330px] m-auto pt-4 pb-6">
						<ButtonRounded
							icon={<FaLinkedinIn />}
							link="https://www.linkedin.com/in/aj2967/"
							newTab
							animate
							delay={1.8}
						/>
						<ButtonRounded
							icon={<FaGithub />}
							link="https://github.com/aj2967"
							newTab
							animate
							delay={2}
						/>
						<ButtonRounded
							icon={<AiOutlineMail />}
							link="mailto:aj2967@hotmail.com"
							newTab
							animate
							delay={2.2}
						/>
						<ButtonRounded
							icon={<BsFillPersonLinesFill />}
							newTab
							animate
							delay={2.4}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
