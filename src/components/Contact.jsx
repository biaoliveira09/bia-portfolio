import Reveal from '../utilities/Reveal';
export default function Contact({ contact_heading }) {
	return (
		<>
			<Reveal>
				<section className="contact">
					<h2 className="mb-1 text-2xl font-bold">{contact_heading}</h2>
					<div className="social-links mx-2 flex items-center justify-around gap-10">
						<a href="">Copy Email</a>
						<a href="" target="_blank" rel="noreferrer">
							GitHub
						</a>
						<a href="" target="_blank" rel="noreferrer">
							LinkedIn
						</a>
					</div>
				</section>
			</Reveal>
		</>
	);
}
