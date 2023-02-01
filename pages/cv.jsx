import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import page1 from "../public/assets/cv/cv-1.png";
import page2 from "../public/assets/cv/cv-2.png";
import Timeline from "../components/Timeline/Timeline";
import Button from "../components/Button";

const cv = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-20">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8 !h-[76vh] md:!h-[78vh]">
					{/* CV description */}
					<div className="md:col-span-2 flex flex-col">
						<div className="w-full sticky top-[90px]">
							<div className="flex justify-between border-b-4 pb-6 border-gray-500">
								<h2 className="text-gray-700 mb-4 md:mb-0 flex items-center text-[26px] md:text-3xl">
									About <span className="ml-2">Me</span>
								</h2>

								<a
								// href="/assets/cv/cv_pdf.pdf"
								// target="_blank"
								// rel="noopener" 
								// noreferrer="true"
								// download="Ajaybir_Singh_CV.pdf"
								>
									<button className="capitalize py-2 px-2 rounded hover:scale-105 ease-in duration-75 active:scale-100">
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
