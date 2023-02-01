import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Button = ({ label, loading = false, classes = "" }) => {
	const handleClick = () => onclick;
	return (
		<button
			className={clsx(
				"p-4 text-gray-100 mt-4 flex gap-2 items-center justify-center",
				classes
			)}
			onClick={handleClick}
			disabled={loading}
		>
			<div>{label}</div>
			<AnimatePresence>
				{loading && (
					<motion.div
						className="pointer-events-none"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Image
							className="animate-spin"
							src={`/assets/spinner-one-third.svg`}
							alt="Loading..."
							height="20"
							width="20"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
};

export default Button;
