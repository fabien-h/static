import headRenderer from '/imports/component/head.js';
import headerRenderer from '/imports/component/header.js';
import footerRenderer from '/imports/component/footer.js';

export default ( posts = [] ) => ( `
${ headRenderer( {
	title: 'home title',
	description: 'home description',
} ) }
${ headerRenderer() }
	<main>
		<h1>
			this is the home page
		</h1>
		<h2>
			The posts
		</h2>
		${
			posts.map( post => `
			<div>
				<a
					href='/post/${ post.meta.path }'
				>
					${ post.meta.title }
				</a>
				<p>
					${ post.extract }
				</p>
			</div>
			` ).join( '' )
		}
	</main>
	${ footerRenderer() }
` );