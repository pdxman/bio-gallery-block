import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
//import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit() {

	// const [bios, setBios] = useState([])

	const data = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'bio', {
			_embed: true, //ADDS FEATURED IMAGE SUPPORT TO QUERY
		});
	});

	// setBios(data);

	console.log(data);

	return (
		<div {...useBlockProps}>
			{ __( 'Bio Block – hello from the editor!', 'bio-block' ) }
			<ul>
				{!data ? "" : data.map((bio) => 
					{ return (
						<li>
							<img 
								style={{ 
									width: "200px", 
									height: "200px" 
								}}							
								src={bio._embedded['wp:featuredmedia']['0'].source_url} 
							/>
						</li>
					)}
				)}
			</ul>	
		</div>
	);
}
