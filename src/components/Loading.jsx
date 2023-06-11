import loading from '../assets/loading.svg';
export default function Loading() {
	return (
		<div className="h-screen">
			<img src={loading} alt="loading" className="h-20 w-20" />
		</div>
	);
}
