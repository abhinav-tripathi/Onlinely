import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import {
	BaseLayout,
	Products,
	Home,
	Contact,
	Categories,
	NoPageFound,
	About
} from '../components';

import {
	CATEGORIES_PAGE_PATH,
	CONTACT_PAGE_PATH,
	PRODUCTS_PAGE_PATH,
	HOME_PAGE_PATH,
	PAGE_NOT_FOUND_PATH,
	ABOUT_PAGE_PATH
} from '../constants';

type AppRoute = {
	path: string;
	element: React.ReactNode;
	protected?: boolean;
};

const AppRoutes: React.FC = () => {
	const routes: AppRoute[] = [
		{path: HOME_PAGE_PATH, element: <Home />},
        {path: CATEGORIES_PAGE_PATH, element: <Categories />},
		{path: PRODUCTS_PAGE_PATH, element: <Products />},
		{path: CONTACT_PAGE_PATH, element: <Contact />},
		{path: PAGE_NOT_FOUND_PATH, element: <NoPageFound />},
		{path: ABOUT_PAGE_PATH, element: <About />}
	];

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BaseLayout />}>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={route.element}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;