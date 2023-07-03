export default function SkipToContentLink() {
	return (
		<div className="skip relative">
			<a
				className="skip-link  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-pink-600 p-2 text-white transition-transform duration-300 focus:z-50 focus:translate-y-0"
				href="#main"
			>
				Skip to content
			</a>
		</div>
	);
}
