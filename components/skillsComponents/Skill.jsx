import { useState, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Skill = ({ title, image, modalDesc }) => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<div
				// className="p-6 shadow-xl rounded-xl transition-transform ease-in duration-200"
				className="p-6 shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-transform ease-in duration-200 hover:shadow-2xl"
				onClick={openModal}
			>
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
						<Image
							src={`/assets/skills/${image}.svg`}
							alt={`${title} logo`}
							height="64"
							width="64"
						/>
					</div>
					<div className="flex flex-col items-center justify-center">
						<h3>{title}</h3>
					</div>
				</div>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 backdrop-blur-sm" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-[600px] max-w-[90%] transform overflow-hidden rounded-2xl bg-white p-4 sm:p-[2rem_2rem_2rem_0] text-left align-middle shadow-xl transition-all">
									<div className="flex flex-col-reverse sm:flex-row justify-between items-center">
										<div className="sm:w-[30%] py-4 sm:py-0 sm:flex sm:justify-center">
											<Image
												src={`/assets/skills/${image}.svg`}
												alt={`${title} logo`}
												height="64"
												width="64"
											/>
										</div>
										<div className="sm:w-[70%]">
											<div
												className="flex justify-end mb-2 cursor-pointer"
												onClick={closeModal}
											>
												<AiOutlineCloseCircle size={20} />
											</div>
											<Dialog.Title
												as="h3"
												className="text-lg font-medium leading-6 text-gray-900"
											>
												What I've Learned in {title}.
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-gray-500">
													{modalDesc}
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Skill;
