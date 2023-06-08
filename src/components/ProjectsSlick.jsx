// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function ProjectsSlick() {
// 	const settings = {
// 		dots: false,
// 		arrows: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 	};

// 	return (
// 		<div className="w-1/2">
// 			<h2>See Other Projects</h2>
// 			<Slider {...settings}>
// 				<div>
// 					<h3>1</h3>
// 				</div>
// 				<div>
// 					<h3>2</h3>
// 				</div>
// 				<div>
// 					<h3>3</h3>
// 				</div>
// 				<div>
// 					<h3>4</h3>
// 				</div>
// 				<div>
// 					<h3>5</h3>
// 				</div>
// 				<div>
// 					<h3>6</h3>
// 				</div>
// 			</Slider>
// 		</div>
// 	);
// }

export default function ProjectsSlick() {
	return (
		<div className="carousel-center carousel rounded-box max-w-md space-x-4  bg-translucentpink p-4 shadow">
			<div className="carousel-item">
				<img
					src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
					className="rounded-box"
				/>
			</div>
			<div className="carousel-item">
				<img
					src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
					className="rounded-box"
				/>
			</div>
			<div className="carousel-item">
				<img
					src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
					className="rounded-box"
				/>
			</div>
			<div className="carousel-item">
				<img
					src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
					className="rounded-box"
				/>
			</div>
			<div className="carousel-item">
				<img
					src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
					className="rounded-box"
				/>
			</div>
			<div className="carousel-item">
				<img
					src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
					className="rounded-box"
				/>
			</div>
			<div className="carousel-item">
				<img
					src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
					className="rounded-box"
				/>
			</div>
		</div>
	);
}
