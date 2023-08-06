export default function SkipToContentLink() {
	return (
		<div className="skip relative">
			<a
				className="skip-link absolute -top-20 left-1/2 -translate-x-1/2 transform bg-pink-600 p-2 text-white transition-transform duration-300 focus:top-0 focus:z-50"
				href="#home"
			>
				Skip to content
			</a>
		</div>
	);
}
