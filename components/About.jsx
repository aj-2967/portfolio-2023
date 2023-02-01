import Image from 'next/image';
import AboutPerson from '../public/assets/aboutPerson.svg'

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen px-10 xl:p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-1">
					<p className="uppercase text-xl tracking-widest text-main">About</p>
					<h2 className="py-4">A little about me</h2>
					<p>
						An experienced Web Developer and a BSc (Hons) Computer Science graduate,
						skilled in designing websites to meet clients’ needs as well as achieving
						satisfactory outcomes for an organisation. A dedicated individual who is
						self-motivated and resilient towards their work responsibilities and has a
						proven record of successfully accomplishing projects for various
						orgaisations. Possess excellent communication and interpersonal skills for
						meeting the designers, developers and project staff for progress updates.
					</p>
					<a href="/#projects" className="py-2 text-gray-600 underline cursor-pointer">
						Check out some of my latest projects.
					</a>
				</div>
				<div className="w-full m-auto col-span-2 rounded-xl flex items-center justify-center p-4 hover:-rotate-6 ease-in duration-300">
					{/* <img
						className="rounded"
						src="/asse"
						alt="About"
					/> */}
					<Image src={AboutPerson} alt="About" />
				</div>
			</div>
		</div>
	);
};

export default About;
