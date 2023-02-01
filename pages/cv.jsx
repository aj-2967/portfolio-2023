import Image from "next/image";

import Timeline from "../components/Timeline/Timeline";
import page1 from "../public/assets/cv/cv-1.png";
import page2 from "../public/assets/cv/cv-2.png";

const cv = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-20">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8 !h-[76vh] md:!h-[78vh]">
					{/* CV description */}
					<div className="md:col-span-2 flex flex-col">
						<div className="w-full sticky top-[90px]">
							<div className="flex justify-between items-end border-b-2 fixed top-0 bottom-[75%] left-0 w-full md:w-[40%] lg:w-[42%] bg-[#ECF0F3] z-10 p-4 lg:px-10">
								<h2 className="text-gray-700 text-[26px] md:text-3xl">
									About Me
								</h2>

								<a
									href="/assets/cv/cv_pdf.pdf"
									target="_blank"
									rel="noopener"
									noreferrer="true"
									download="Ajaybir_Singh_CV.pdf"
								>
									<button className="capitalize py-2 px-2 rounded hover:scale-105 ease-in duration-75 active:scale-100 shadow">
										Download CV
									</button>
								</a>
							</div>

							<Timeline />
						</div>
					</div>

					{/* CV Preview */}
					<div className="md:col-span-3 px-2 pt-4 pb-8 bottom-[20px]">
						{/* Page 1 */}
						<div className="p-1 bg-white rounded-xl shadow-lg">
							<Image src={page1} alt="CV" />
						</div>
						{/* Page 2 */}
						<div className="p-1 bg-white rounded-xl shadow-lg mt-4">
							<Image src={page2} alt="CV" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default cv;
