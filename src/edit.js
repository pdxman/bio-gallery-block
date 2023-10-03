import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit() {

	const [bioImages, setBioImages] = useState([])

	// const [bioNum, setBioNum] = useState([])

	const data = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'bio', {
			_embed: true, //ADDS FEATURED IMAGE SUPPORT TO QUERY
		});
	});

	
		function bioImagesArray(){
			var urls = []

			if(data){
				for(var i = 0; i < data.length; i++){
					//console.log(data[i]._embedded['wp:featuredmedia']['0'].source_url)
					urls.push(data[i]._embedded['wp:featuredmedia']['0'].source_url)
				}

			}
			
			const urlList = urls.map((element) => {
				return (
					<p>{element}</p>
				)}
				// console.log(element)
			)
			console.log(urlList)
			return urlList
			
		}
	//console.log(data)
	//setBios(data);
	console.log(data);
	return (
		<div {...useBlockProps} className="bio-image-wrapper">
			<div>
				<ul className="bio-image-list">
					{!data ? "" : data.map((bio, index) => 
						{ return (
							<li key={index} className={"image-" + index}>
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
					).sort(() => .6 - Math.random() )}
				</ul>			
			</div>
			{/* <div>
				<ul className="bio-image-list-two">
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
					).sort(() => .6 - Math.random() )}
				</ul>							
			</div>	
			<div>
				<ul className="bio-image-list-three">
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
					).sort(() => .5 - Math.random() )}
				</ul>							
			</div>						 */}
		</div>
	);
}
