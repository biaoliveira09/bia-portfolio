import Projects from '../components/Projects';
import About from '../components/About';
import Music from '../components/Music';
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
			playlist_id,
		} = data.acf;

		return (
			<>
				<main className="z-30 flex flex-col items-center overflow-hidden">
					<Reveal>
						<section className="intro-section z-30 flex h-72 flex-col items-center justify-center sm:h-96 md:h-screen">
							<h1 className="fade-in z-30 text-4xl font-bold lowercase sm:text-6xl md:text-7xl">
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
					<div className="z-30 flex w-11/12 flex-col items-center sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12">
						<About />
						<Music playlistId={playlist_id} />
					</div>
				</main>
			</>
		);
	}
}
