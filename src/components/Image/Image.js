import React from 'react';
import './Image.css';
import Img from '../../assets/Maja.jpg';

const Image = () => (
	<div className="image">
		<img src={Img} alt="La Maja Desnuda" />
	</div>
);

export default Image;
