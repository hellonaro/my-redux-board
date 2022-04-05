import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../atoms/ProfileImage'
import ProfileMessage from '../atoms/ProfileMessage'

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
`
const Profile: React.FC = () => {
    return (
        <FlexBox>
            <ProfileImage></ProfileImage>
            <ProfileMessage message="리액트 공부하는 중~"></ProfileMessage>
        </FlexBox>
    )
}

export default Profile;