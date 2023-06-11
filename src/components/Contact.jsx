import Reveal from '../utilities/Reveal';
export default function Contact() {
	return (
		<>
			<Reveal>
				{/* <section className="contact flex-start mb-10 mt-32 flex h-64 flex-col gap-5 bg-pink-700 text-stone-50">
					<div className="mt-20 flex flex-col items-center justify-center gap-2">
						<h2 className="mb-1 text-2xl font-bold">Let's connect</h2>
						<div className="social-links flex items-baseline justify-between gap-4">
							<a href="">Copy Email</a>
							<a href="" target="_blank" rel="noreferrer">
								GitHub
							</a>
							<a href="" target="_blank" rel="noreferrer">
								LinkedIn
							</a>
						</div>
					</div>
				</section> */}

				<section className="contact">
					<h2 className="mb-1 text-2xl font-bold">Let's connect</h2>
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
