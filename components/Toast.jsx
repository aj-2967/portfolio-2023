import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const Toast = ({ type, title = "", message = "", position = "top-right", show = false }) => {
	const [showToast, setShowToast] = useState(show);
	const [hovering, setHovering] = useState(false);

	useEffect(() => {
		setShowToast(show);

		if (!hovering && show) {
			setTimeout(() => {
				console.log("here?");
				setShowToast(false);
			}, 5000);
		}
	}, [show, hovering]);

	const handleDissmissToast = () => {
		setShowToast(false);
	};

    const handleToastTitle = () => {
        if (!title && type === 'success') {
            return "Success";
        }

        if (!title && type === 'error') {
            return "Failed";
        }

        return title;
    }

	const toastVariants = {
		showTopRight: {
			x: 0,
			transition: {
				duration: 0.7,
			},
		},
	};

	return (
		<AnimatePresence>
			{showToast && (
				<motion.div
					className={clsx("notification-container", position)}
					initial={toastVariants.hideTopRight}
					animate={toastVariants.showTopRight}
					exit={{ opacity: 0 }}
					onClick={() => handleDissmissToast()}
					onMouseEnter={() => setHovering(true)}
					onMouseLeave={() => setHovering(false)}
				>
					<div className={clsx("notification", position)}>
						<button>x</button>
						<div className="notification-image mt-2">
							<Image
								src={`/assets/Toast/${type}.svg`}
								alt="Toast"
								height="50"
								width="50"
							/>
						</div>
						<div>
							<p className="notification-title">{handleToastTitle()}</p>
							<p className="notification-message">{message}</p>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
export default Toast;
