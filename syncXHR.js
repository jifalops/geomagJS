/*
	Syncronous XML HTTP Request
	
	Returns the contents of the file at the specified URL.
*/

/*jslint devel: true, browser: true, windows: true */
function syncXHR(url) {
	'use strict';
	var xmlHttp;
	try {
		xmlHttp = new XMLHttpRequest();
	} catch (e0) {
		try {// Internet Explorer 5 & 6
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e1) {
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e2) {
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	xmlHttp.open("GET", url, false);
	xmlHttp.send(null);

	return (xmlHttp.status === 200 || xmlHttp.readyState === 4) ? xmlHttp.responseText : false;
}