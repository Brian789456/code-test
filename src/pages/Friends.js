import React, { useState } from 'react'
import styled from 'styled-components';
import { Typography, Grid, Avatar, Button } from '@mui/material';

const UserFriends = [{ name: 'Peter', avatarSrc: 'https://mui.com/static/images/avatar/1.jpg' },
{ name: 'Eric', avatarSrc: 'https://mui.com/static/images/avatar/2.jpg' },
{ name: 'Mary', avatarSrc: 'https://mui.com/static/images/avatar/3.jpg' },];

function Friends() {

    return (
        <ContainerGrid container spacing={2} >
            {UserFriends.map(friend => (<Grid item xs={6}><FriendGrid container>
                <AvatarGrid item xs={4}>
                    <CustomAvatar src={friend.avatarSrc} />
                </AvatarGrid>
                <ContentGrid item xs={4}>
                    <Typography variant="h3" component={"h2"}>{friend.name}</Typography>
                </ContentGrid>
                <BtnGrid item xs={4}>
                    <Button variant="outlined">
                        <Typography variant="h6" >View</Typography>
                    </Button>
                </BtnGrid>
            </FriendGrid> </Grid>
            ))}
        </ContainerGrid >
    )
}

export default Friends;

const ContainerGrid = styled(Grid)`
    margin:0 ${props => props.theme.spacing(25)};
    caret-color: transparent;
`

const FriendGrid = styled(Grid)`
    border:1px ${props => props.theme.palette.primary.main} solid;
`

const CustomAvatar = styled(Avatar)`
    width: 140px;
    height: 140px;
    margin:${props => props.theme.spacing(2)};
`
const AvatarGrid = styled(Grid)`
    display:flex;
    align-items:center;
    justify-content:center ;
`

const ContentGrid = styled(Grid)`
    display:flex;
    justify-content:center ;
    align-items:center;
`

const BtnGrid = styled(Grid)`
    display:flex;
    justify-content:center ;
    align-items:center;
`