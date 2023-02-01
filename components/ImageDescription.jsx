import { useState, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ImageDescription = ({ title, image, description }) => {
    let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<div className="flex flex-col my-8 md:flex-row md:justify-center gap-4">
				<div
					className="img-container cursor-pointer rounded-lg md:w-[40%]"
					onClick={openModal}
				>
					<Image src={image} alt={title} className="rounded-lg shadow-lg" />
				</div>
				<div className="md:w-1/2 md:items-center md:mt-4">
					<h4 className="text-xl">{title}</h4>
					<p>{description}</p>
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
						<div className="fixed inset-0 backdrop-blur" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
                        <div className="absolute top-2 right-2 hover:scale-110 cursor-pointer transition-transform duration-[50ms] ease-in"><AiOutlineCloseCircle size={30} className="text-gray-600" /></div>
						<div className="flex min-h-full items-center justify-center text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="max-w-[90%] h-full transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
									<Image src={image} alt={title} />
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default ImageDescription;
