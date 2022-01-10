import React from 'react';

const Card = (props) => {
	const { title, hoverText, image, additionalStyle, video } = props;

	return (
		<div className='card-wrapper'>
			<div className='card'>
				{video ? (
                    <div className='card-img'>
                        <video controls>
                            <source src={image} type="video/mp4" />
                        </video>
					</div>

				) : (
					<div className='card-img'>
						<div className='card-hover-text'>
							<p style={additionalStyle}>
								<span>{hoverText}</span>
							</p>
						</div>

						<img src={image} alt='' />
					</div>
				)}

				<h3 className='card-title'>
					<a>{title}</a>
				</h3>
			</div>
		</div>
	);
};

export default Card;
