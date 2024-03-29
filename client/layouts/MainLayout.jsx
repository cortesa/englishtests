import React from 'react';

import Header from '../partials/Header.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
	<header className="main-header">
		<Header />
	</header>
	<main>
		{content}
	</main>
	</div>
)