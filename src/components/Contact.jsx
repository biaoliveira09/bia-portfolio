import Reveal from '../utilities/Reveal';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Contact({ contact_heading }) {
	return (
		<>
			<Reveal>
				<section className="contact pb-20 pt-16 sm:pt-0">
					<div className="flex justify-between">
						<h2 className="mb-10 text-2xl font-bold">{contact_heading}</h2>
					</div>
					<div className="social-links mx-2 flex w-full items-center justify-between">
						<a
							href="https://www.linkedin.com/in/biaoliveira09/"
							target="_blank"
							rel="noreferrer"
						>
							<BsLinkedin className="h-8 w-8 text-pink-700 transition-transform hover:-translate-y-0.5 hover:text-pink-600" />
						</a>
						<a
							href="https://github.com/biaoliveira09"
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub className="h-8 w-8 text-pink-700 transition-transform hover:-translate-y-0.5 hover:text-pink-600" />
						</a>
						<a
							href="mailto:bia@biaoliveira.com"
							target="_blank"
							rel="noreferrer"
						>
							<MdEmail className="h-8 w-8 text-pink-700 transition-transform hover:-translate-y-0.5 hover:text-pink-600" />
						</a>
					</div>
				</section>
			</Reveal>
		</>
	);
}
