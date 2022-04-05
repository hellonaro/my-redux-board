import React from 'react';
import styled from 'styled-components'

const ImageContainer = styled.div`
    position: relative;
    text-align: center;
    height: 100px; 
    width: 100px;
    margin: auto;
    margin-top: 100px;
`;

const RoundImage = styled.img`
    position: absolute; 
    top: 0; left: 0; 
    transform: translate(50, 50); 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    margin: auto;
    border-radius:50%;
`;

const ProfileImage: React.FC = () => {
    return (
        <ImageContainer>
            <RoundImage src={require("../../assets/hansol.gif")} />
        </ImageContainer>
    )
}

export default ProfileImage;