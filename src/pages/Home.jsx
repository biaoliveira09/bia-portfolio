import Projects from '../components/Projects';
import About from '../components/About';
import Reveal from '../utilities/Reveal';
import { useAbout } from './../App';

export default function Home() {
	const { isLoading, isError, isSuccess, data, error } = useAbout();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (isSuccess) {
		const {
			name,
			short_bio,
			github_profile_link,
			linkedin_profile_link,
			email_address,
		} = data.acf;

		return (
			<>
				<main className="flex flex-col items-center overflow-x-hidden">
					<Reveal>
						<section className="intro-section z-30 flex h-72 flex-col items-center justify-center sm:h-96 md:h-screen">
							<h1 className="fade-in z-30 font-eight text-4xl lowercase sm:text-6xl md:text-7xl">
								{name}
							</h1>
							<p className=" fade-in z-30 text-lg sm:text-xl md:text-2xl">
								{short_bio}
							</p>
							<div className="social-links z-30 m-2 flex gap-6 sm:hidden">
								<a href={github_profile_link} target="_blank" rel="noreferrer">
									GitHub
								</a>
								<a
									href={linkedin_profile_link}
									target="_blank"
									rel="noreferrer"
								>
									LinkedIn
								</a>
								<a
									href={`mailto:${email_address}`}
									target="_blank"
									rel="noreferrer"
								>
									Email
								</a>
							</div>
						</section>
					</Reveal>
					<Projects />
					<About />
				</main>
			</>
		);
	}
}
