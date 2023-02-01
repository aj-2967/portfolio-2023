import { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import ButtonRounded from "../ButtonRounded";
import emailjs from "@emailjs/browser";
import clsx from "clsx";
import Button from "../Button";
import Toast from "../Toast";

const Contact = () => {
	const [loadingForm, setLoadingForm] = useState(false);
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showFailureToast, setShowFailureToast] = useState(false);
	const form = useRef();

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleOpenSuccessToast = () => {
		setShowSuccessToast(false);
		setTimeout(() => {
			setShowSuccessToast(true);
		}, 50);
	};

	const handleOpenFailureToast = () => {
		setShowFailureToast(false);
		setTimeout(() => {
			setShowFailureToast(true);
		}, 50);
	};

	const sendEmail = (e = false) => {
		e.preventDefault();
		setLoadingForm(true);

		emailjs
			.sendForm(
				"service_pljwpgh",
				"template_yc950jp",
				form.current,
				"user_RfnCHU0kgfgAN8AhOud8X"
			)
			.then(
				(result) => {
					console.log(result);
					setLoadingForm(false);
					handleOpenSuccessToast();
					setLoadingForm(false);
				},
				(error) => {
					console.log(error.text);
					setLoadingForm(false);
					handleOpenFailureToast();
					setLoadingForm(false);
				}
			);

		e.target.reset();
	};

	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] mx-auto px-10 xl:px-2 py-16">
				<Toast
					type="success"
					show={showSuccessToast}
					message="Message sent successfully."
				/>
				<Toast
					type="error"
					show={showFailureToast}
					message="Please try submitting again."
				/>
				{/* Heading */}
				<p className="uppercase text-xl tracking-widest text-main">Contact</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full">
						{/* <div className="shadow-xl shadow-gray-400 rounded-xl"> */}
						<div className="">
							<div className="lg:p-4 h-full">
								{/* <div>
									<p className="pt-2 text-[26px] font-semibold">AJ Singh</p>
									<p>Fullstack Developer</p>
								</div> */}
								<div>
									<div className="w-full">
										<div className="flex items-center justify-between m-auto py-4 w-full max-w-[300px]">
											<ButtonRounded
												icon={<FaLinkedinIn />}
												link="https://www.linkedin.com/in/aj2967/"
												newTab
											/>
											<ButtonRounded
												icon={<FaGithub />}
												link="https://github.com/aj2967"
												newTab
											/>
											<ButtonRounded
												icon={<AiOutlineMail />}
												link="mailto:aj2967@hotmail.com"
												newTab
											/>
											<ButtonRounded
												icon={<BsFillPersonLinesFill />}
												newTab
											/>
										</div>
									</div>
								</div>

								<div className="contactCard-container">
									<button className="card contactCard-button">
										<div className="row clearfix">
											<div className="left big">0777 123 456</div>
											<div className="right">
												<p>
													<span className="big">W</span>eb{" "}
													<span className="big">D</span>esign &amp;{" "}
												</p>
												<p>
													<span className="big">D</span>evelopment{" "}
												</p>
												{/* <p>
													<span className="med no-space">D</span>
													<span className="small no-space">
														evelopment{" "}
													</span>
												</p> */}
											</div>
										</div>
										<div className="row">
											<p>
												<span className="big">A</span>jaybir{" "}
												<span className="big">Singh</span>
											</p>
											<p>
												<span className="big">W</span>eb{" "}
												<span className="big">D</span>
												eveloper
											</p>
										</div>
										<div className="row">
											<p>
												<span className="med">E</span>
												<span className="small">
													mail: aj2967@hotmail.com
												</span>
												<span className="med"> &deg; L</span>
												<span className="small">
													inkedIn: linkedin.com/in/aj2967
												</span>
												<span className="med"> &deg; G</span>
												<span className="small">itHub: aj2967</span>
											</p>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Right */}
					<div className="col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form ref={form} onSubmit={sendEmail}>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2" htmlFor="">
											Name
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											name="name"
											required
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2" htmlFor="">
											Email
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="email"
											name="email"
											required
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2" htmlFor="">
										Message
									</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										rows="4"
										name="message"
										required
									/>
								</div>
								<Button
									label="Send Message"
									loading={loadingForm}
									onClick={sendEmail}
									classes="w-full"
								/>
							</form>
						</div>
					</div>
				</div>
				{/* Scroll to top */}
				<div className="flex justify-center py-12">
					<a href="/#home" onClick={() => handleScrollToTop()}>
						<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-main" size={30} />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
