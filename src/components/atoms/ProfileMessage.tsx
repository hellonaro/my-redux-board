import React from 'react';
import styled from 'styled-components'

type ProfileMessageProps = {
    message: string;
}

const Message = styled.div`
    padding-top: 20px;
    margin: auto;
    font-size: small;
    text-align: center;
`

const ProfileMessage: React.FC<ProfileMessageProps> = ({ message }) => {
    return (
        <Message>
            {message}
        </Message>
    )
}

export default ProfileMessage;