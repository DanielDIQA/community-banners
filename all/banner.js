require( './css/styles.pcss' );

import { AuthorsBanner } from './oceditorsBanner';

$( document ).ready( function () {
	const bannerName = 'WMDE_oceditors_spring_2020_2nt_cs';
	const bannerTemplate = require( './templates/banner.hbs' );

	const authorsBanner = new AuthorsBanner( bannerName, bannerTemplate );
	authorsBanner.init();
} );
