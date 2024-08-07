import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Reveal({ children }) {
	const ref = useRef(null);

	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);

	return (
		<div ref={ref}>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						y: 75,
					},
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.75,
							ease: 'easeInOut',
							delay: 0.05,
						},
					},
				}}
				initial="hidden"
				animate={mainControls}
			>
				{children}
			</motion.div>
		</div>
	);
}
