require( './css/styles.pcss' );

import { AuthorsBanner } from './oceditorsBanner';

$( document ).ready( function () {
	const bannerName = 'WMDE_oceditors_spring_2020_2nt_cs_m';
	const bannerTemplate = require( './templates/banner_mobile.hbs' );

	const authorsBanner = new AuthorsBanner( bannerName, bannerTemplate );
	authorsBanner.init();
} );
