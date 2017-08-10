import headRenderer from '/imports/component/head.js';
import headerRenderer from '/imports/component/header.js';
import footerRenderer from '/imports/component/footer.js';
import marked from 'marked';

export default ( post = {} ) => ( `
${ headRenderer( {
	title: post.title,
	description: post.description,
} ) }
${ headerRenderer() }
	<main>
		<h1>
			${ post.title }
		</h1>
		${ marked( post.content ) }
	</main>
	${ footerRenderer() }
` );