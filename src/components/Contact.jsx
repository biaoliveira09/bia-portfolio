import Reveal from '../utilities/Reveal';
export default function Contact({ contact_heading }) {
	return (
		<>
			<Reveal>
				<section className="contact">
					<div className="flex justify-between">
						<h2 className="mb-1 text-2xl font-bold">{contact_heading}</h2>
						<a href="" className="text-2xl">
							bia@biaoliveira.com
						</a>
					</div>
					<div className="social-links mx-2 flex items-center justify-around gap-10">
						<a href="" target="_blank" rel="noreferrer">
							Check out my GitHub
						</a>
						<a href="" target="_blank" rel="noreferrer">
							Connect with me on LinkedIn
						</a>
					</div>
				</section>
			</Reveal>
		</>
	);
}
