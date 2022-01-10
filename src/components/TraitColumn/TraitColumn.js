import React from 'react';

const TraitColumn = (props) => {
    const {textTitle, textDescription, image} = props;

	return (
		<div className='column'>
			<img className='shape' src={image} />

			<div>
				<div className='text-center'>
					<span>{textTitle}</span>
					<p>{textDescription}</p>
				</div>
			</div>
		</div>
	);
};

export default TraitColumn;
