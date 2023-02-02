import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Tag from "./Tag";

const ProjectContainer = ({
	title,
	image,
	languages,
	overview,
	objectives,
	demo,
	code,
	children,
}) => {
	return (
		<div className="w-full">
			{/* Overlay */}
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					style={{ objectFit: "cover" }}
					fill
					src={image}
					alt="Cover"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">{title}</h2>
					<h3 className="flex font-medium gap-2 overflow-x-auto no-scrollbar">
						{languages &&
							languages.map((lang, index) => (
								// <p key={index}>
								// 	{index > 0 ? "/" : ""} {lang}
								// </p>
								<Tag key={index} language={lang} />
							))}
					</h3>
				</div>
			</div>

			{/* Content section */}
			<div className="max-w-[1240px] mx-auto p-2 px-8 gap-8 pt-8">
				<div className="flex flex-col gap-8 md:flex-row justify-between">
					{/* Left section */}
					<div>
						{overview && (
							<p className="uppercase text-xl tracking-widest text-main">Project</p>
						)}
						{overview && <h2 className="py-4">Overview</h2>}
						{overview && (
							<p className="md:pr-4 bg-gray-200 rounded-2xl p-2 sm:p-4 md:p-6">
								{overview}
							</p>
						)}
						{demo && (
							<a href={demo} target="_blank">
								<button className="px-8 py-2 mt-4 mr-8 transition-transform duration-200 ease-in hover:scale-105 rounded-lg">
									Demo
								</button>
							</a>
						)}
						{code && (
							<a href={code} target="_blank">
								<button className="px-8 py-2 mt-4 transition-transform duration-200 ease-in hover:scale-105 rounded-lg">
									Code
								</button>
							</a>
						)}
					</div>

					{/* Right section */}
					{overview && (
						<div className="w-full md:min-w-[200px] md:max-w-[350px]">
							<div className="shadow-lg shadow-gray-400 bg-gray-200 rounded-xl p-4">
								<div className="p-2">
									<p className="text-center font-bold pb-2">Objectives</p>
									{objectives &&
										objectives.map((objective, index) => (
											<div
												key={index}
											>
												<p className="text-gray-600 py-2 flex items-center gap-1 text-[12px]">
													{/* <RiRadioButtonFill /> */}
													{objective}
												</p>
											</div>
										))}
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="col-span-5">
					<div className="my-20">{children}</div>

					{/* Back button */}
					<div className="flex">
					<Link href="/#projects">
						<p className="text-main cursor-pointer mb-4 border-2 border-main border-solid py-1 px-4 rounded">{'< '}Back</p>
					</Link>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
