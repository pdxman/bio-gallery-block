import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit() {

	const data = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'bio', {
			_embed: true, //ADDS FEATURED IMAGE SUPPORT TO QUERY
		});
	});

	console.log(data);

	return (
		<p { ...useBlockProps() }>
			{ __( 'Bio Block – hello from the editor!', 'bio-block' ) }
		</p>
	);
}
