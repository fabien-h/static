import fs from 'fs';
import buildPages from '/imports/buildPages.js';

if ( !fs.existsSync( `${ process.env.PWD }/.out` ) )
	fs.mkdirSync( `${ process.env.PWD }/.out` );
if ( !fs.existsSync( `${ process.env.PWD }/.out/post` ) )
	fs.mkdirSync( `${ process.env.PWD }/.out/post` );

buildPages( Posts );

WebApp.connectHandlers.use(

	( req, res, next ) => {
		try {
			let data = fs.readFileSync( `${ process.env.PWD }/.out${ req.originalUrl }/index.html` )
			res.write( data );
			return res.end();
		} catch ( err ) {
			res.write( '404' );
			return res.end();
		}
	}

)