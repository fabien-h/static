import homeRenderer from '/imports/routes/home.js';
import postRenderer from '/imports/routes/post.js';
import fs from 'fs';

const root = `${ process.env.PWD }/.out/`;

export default ( posts ) => {

	fs.writeFileSync( `${ root }index.html`, homeRenderer( posts ) );

	for ( let post of posts ) {
		if ( !fs.existsSync( `${ root }/post/${ post.meta.path }` ) )
			fs.mkdirSync( `${ root }/post/${ post.meta.path }` );
		fs.writeFileSync( `${ root }/post/${ post.meta.path }/index.html`, postRenderer( post ) );
	}

}