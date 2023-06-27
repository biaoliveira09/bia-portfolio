export default function Footer({ name }) {
	return (
		<footer className="mt-20 flex h-8 items-center justify-center text-sm sm:h-12">
			<p className="mb-24">© 2023 {name}</p>
		</footer>
	);
}
