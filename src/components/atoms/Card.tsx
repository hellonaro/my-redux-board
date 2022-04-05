import React from 'react';
import styled from 'styled-components'

const ImageContainer = styled.div`
    position: relative;
    height: 200px; 
    width: 200px;
    margin: 5px;
    display: inline-block;
`;

type CardImageProps = {
    img: string;
}

const CardImage = styled.img`
    position: absolute; 
    top: 0; left: 0; 
    transform: translate(50, 50); 
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    margin: auto;
    border-radius:5%;
`

const Card: React.FC<CardImageProps> = ({ img }) => {

    return (
        <ImageContainer>
            <CardImage src={img} />
        </ImageContainer>
    )
}

export default Card