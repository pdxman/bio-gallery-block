import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {bioImages} = attributes

	return (
		<div { ...useBlockProps.save() } className="bio-image-wrapper">
			<ul className="bio-image-list">
				{!bioImages ? "" : bioImages.map((bio, index) => 
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
		    <ul className="bio-image-list">
				{!bioImages? "" : bioImages.map((bio, index) => 
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
				).sort(() => .5 - Math.random() )}
			</ul>							
		</div>
	);
}
