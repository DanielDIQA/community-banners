require( './css/styles.pcss' );

import { OcceditorsBanner } from './OcceditorsBanner';

$( document ).ready( function () {
	const bannerName = 'B20WMDE_occeditors_spring_2020_2ntm';
	const bannerTemplate = require( './templates/banner_mobile.hbs' );
	const showbanner = true;
	const occeditorsBanner = new OcceditorsBanner( bannerName, bannerTemplate );
	/*
	Print the banner if the current user is part of Target group A or B:
		Target group A: eligible voters
			more than 200 edits in total
			less than 1000 edits in total
			registered for at least two months
			last edit in 2019 or 2020
		Target group B: new users
			20 or more edits in total
			less than 200 edits in total
		(the condition below are not optimized due to readability concerns)
	*/
	if(showbanner != null) {
		occeditorsBanner.init();
	}
	else {
		if (mw.config.get("wgUserRegistration") != null) { //only registered users
			var daysRegistered = Math.floor((Date.now() - mw.config.get("wgUserRegistration")) / (1000 * 3600 * 24));
			var editCount = mw.config.get("wgUserEditCount");
			
			if (editCount >= 20 && editCount < 200) {
					//User is part of Target group B
					occeditorsBanner.init();
				}
		}
	}
} );
