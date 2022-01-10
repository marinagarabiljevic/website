import React from 'react';

const MainText = (props) => {
    const {topTile, title, subtitle} = props;

	return (
		<div className='maintext text-center'>
			<span className='maintext-title'>{topTile}</span>
			<h2>{title}</h2>
			<p>{subtitle}</p>
		</div>
	);
};

export default MainText;
