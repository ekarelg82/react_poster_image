import React from 'react';
import './Poster.css';
import Image from '../Image/Image';
import Text from '../Text/Text';
import PropTypes from 'prop-types';

var posterBox = {
	posterTitle: 'La Maja Desnuda',
	posterText:
		'La Maja Desnuda is a 1958 Italian-French-American co-production made by S.G.C., Titanus Films, and United Artists.[2][3] This historical film recounting of the romance between the painter Francisco Goya and the Duchess of Alba was directed by Henry Koster, and produced by Silvio Clementelli and Goffredo Lombardo.',
};

class Poster extends React.Component {
	render() {
		return (
			<div className="poster-outline">
				<div className="title">
					<h1>
						<Text posterTitle={posterBox.posterTitle} />
					</h1>
				</div>

				<div className="text">
					<h3>
						{' '}
						Description:
						<Text posterText={posterBox.posterText} />
					</h3>
				</div>

				<div className="image">
					<Image />
				</div>
			</div>
		);
	}
}

export default Poster;
