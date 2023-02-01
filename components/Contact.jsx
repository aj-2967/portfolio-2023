import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16  w-full">
				{/* Heading */}
				<p className="uppercase text-xl tracking-widest text-main">Contact</p>
				<h2 className="py-4">Get In Touch</h2>

				{/* Contact */}
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								{/* <img
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q="
									alt="/"
								/> */}
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={`/assets/mailbox.svg`}
									alt='Contact Form'
									height="110"
									width="200"
								/>
							</div>
							<div>
								<h2 className="py-2">AJ Singh</h2>
								<p>Fullstack Developer</p>
								<p>I am available for freelance work :)</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect with me</p>
								<div className="flex items-center justify-between py-4">
									{/* Social Links */}
									<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaLinkedinIn />
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaGithub />
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<AiOutlineMail />
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<BsFillPersonLinesFill />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right */}
					<div className="col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2" htmlFor="">
											Name
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2" htmlFor="">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2" htmlFor="">
										Email
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2" htmlFor="">
										Subject
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2" htmlFor="">
										Message
									</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										rows="10"
									/>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				{/* Scroll to top */}
				<div className="flex justify-center py-12">
					<Link href="/" />
					<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
						<HiOutlineChevronDoubleUp className="text-main" size={30} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
