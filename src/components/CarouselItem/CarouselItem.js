import React from 'react';

const CarouselItem = (props) => {
	const { firstLine, secondLine, thirdLine, backgroundImage } = props;

	const style = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundColor: 'white',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};

	return (
		<div className='carousel-item' style={style}>
			<div className='text-container'>
				<h1>{firstLine}</h1>
				<h2>{secondLine}</h2>
				{thirdLine ? <h1>{thirdLine}</h1> : <></>}
			</div>
		</div>
	);
};

export default CarouselItem;
