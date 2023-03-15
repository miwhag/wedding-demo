/** @format */
import styled from 'styled-components';
import Countdown from './Countdown';


const ContentBlockContainer = styled.div<{
	position: string;
	backgroundColor: string;
	copyColor: string;
}>`
	display: flex;
	flex-direction: ${(p) => (p.position === 'right' ? 'row-reverse' : 'row')};
	justify-content: center;
	align-items: center;
	max-width: 1000px;
	width: 100%;
	background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'white')};
	p {
		color: ${(p) => (p.copyColor ? p.copyColor : 'black')};
		font-size: 35px;
		padding: 20px;
		text-align: center;
		max-width: 270px;
		font-family: 'Lazydog';
	}
	img {
		width: 50%;
		max-width: 500px;
	}
	div {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div#copy-div {
		min-height: 350px;
	}
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		img {
			width: 100%;
		}
		div {
			width: 100%;
		}
	}
`;

const ContentBlockCopyContainer = styled.div<{
	position: string;
	backgroundColor: string;
}>`
	display: flex;
	flex-direction: ${(p) => (p.position === 'right' ? 'row-reverse' : 'row')};
	justify-content: center;
	align-items: center;
	background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'white')};
`;
export default function ContentBlock({
	image,
	defaultImage,
	copy = '',
	imagePosition,
	backgroundColor,
	copyColor,
	alt,
	type,
	id,
}) {
	if (type === 'countdown') {
		return (
			<ContentBlockContainer
				position={imagePosition}
				backgroundColor={backgroundColor}
				copyColor={copyColor}
				id={id}
			>
				<img 
				src={image} 
				alt={alt} 
				/>
				<Countdown />
			</ContentBlockContainer>
		);
	} else if (type === 'copy') {
		<ContentBlockContainer
			position={imagePosition}
			backgroundColor={backgroundColor}
			copyColor={copyColor}
			id={id}
		>
			<img 
			src={image}
			alt={alt}
			 />
			<div id='copy-div'>
				<p>{copy} </p>
			</div>
		</ContentBlockContainer>;
	} else if (type === 'copy-2') {
		<ContentBlockCopyContainer
			position={imagePosition}
			backgroundColor={backgroundColor}
			id={id}
		>
			<img src={image} alt={alt} />
			<div id='copy-div'>
				<p dangerouslySetInnerHTML={{ __html: copy }} />
			</div>
		</ContentBlockCopyContainer>;
	}
	return (
		<ContentBlockContainer
			position={imagePosition}
			backgroundColor={backgroundColor}
			copyColor={copyColor}
			id={id}
		>
			<img 
			srcSet={image} 
			sizes="(min-width: 540px) 500px, calc(90.91vw + 27px)"
			alt={alt}
			src={defaultImage}
			 />
			<div id='copy-div'>
				<p>{copy} </p>
			</div>
		</ContentBlockContainer>
	);
}
