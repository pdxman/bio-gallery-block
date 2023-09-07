import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit() {



	const [bioImages, setBioImages] = useState([])

	const data = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'bio', {
			_embed: true, //ADDS FEATURED IMAGE SUPPORT TO QUERY
		});
	});

	useEffect(() => {
		function bioImagesArray(){
			if(data){
				for(var i = 0; i < data.length; i++){
					console.log(data[i]._embedded['wp:featuredmedia']['0'].source_url)
				}
			}
		
		}
	
		bioImagesArray()
	})
	
	
	//console.log(data)

	//setBios(data);

	//console.log(data);

	return (
		<div {...useBlockProps}>
			{ __( 'Bio Block – hello from the editor!', 'bio-block' ) }
			<ul  className="bio-image-list">
				{!data ? "" : data.map((bio) => 
					{ return (
						<li>
							<img 
								style={{ 
									maxWidth: "250px",
   									height: "250px",
									objectFit: "cover",
									objectPosition: "top",
									width: "100%"
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
