export default function Footer({ name }) {
	return (
		<footer className="z-40 mt-20 flex h-8 items-center justify-center text-sm sm:h-12">
			<p className="mb-32">© 2023 {name}</p>
		</footer>
	);
}
