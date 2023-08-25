import React from 'react';
import {Outlet} from 'react-router-dom';
import {Footer, Header} from '../organisms';

const BaseLayoutTemplate: React.FC = () => {

	return (
		<div
			className={`main-wrapper flex flex-col min-h-screen justify-between`}
		>
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default BaseLayoutTemplate;