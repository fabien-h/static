import settings from '/imports/settings.js';

export default ( pageData = {} ) => ( `
<!DOCTYPE html>
<html>
	<head>
		<title>${ pageData.title || settings.defaultPageTitle || '' }</title>
		<meta name='description' content='${ pageData.description || settings.defaultPageDescription || '' }' />
		<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
		<meta http-equiv='Content-type' content='text/html; charset=utf-8' />
		<meta property='og:description' content='${ pageData.description || settings.defaultPageDescription || '' }' />
		<meta property='og:title' content='${ pageData.title || settings.defaultPageTitle || '' }' />
		<meta property='og:image' content='https://…' />
		<meta property='og:type' content='website' />
		<meta property='twitter:title' content='${ pageData.title || settings.defaultPageTitle || '' }' />
		<meta property='twitter:description' content='${ pageData.description || settings.defaultPageDescription || '' }' />
	</head>
` );