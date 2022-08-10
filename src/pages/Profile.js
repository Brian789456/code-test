import React, { useState } from 'react'
import {
    Box, Typography, Container, CssBaseline, Button, Avatar,
    Paper, TableContainer, Table, TableRow, TableCell, TableBody
} from "@mui/material";
import styled from 'styled-components';

const userDetail = { name: 'Joe', email: 'aaa@aaa.com', phoneNum: '12345678', company: 'ABC company' };

function Profile() {

    const renderTableRow = (name, value) => <TableRow
        key={name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
            {name}
        </TableCell>
        <TableCell align="left">{value}</TableCell>
    </TableRow>

    return (<Container component="main" >
        <CssBaseline />
        <CustomBox>
            <Typography variant="h4" component="h2" align='center'>Profile</Typography>
            <FormBox component="form" autoComplete="off" >
                <CustomAvatar src={"https://mui.com/static/images/avatar/1.jpg"} />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {renderTableRow('Name', userDetail.name)}
                            {renderTableRow('Email', userDetail.email)}
                            {renderTableRow('Phone Number', userDetail.phoneNum)}
                            {renderTableRow('Company', userDetail.company)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <AddBtn
                    type="submit"
                    fullWidth
                    variant="contained">
                    Add as a Friend
                </AddBtn>
            </FormBox>
        </CustomBox>
    </Container>)
}

export default Profile;

const CustomBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:500px;
    caret-color: transparent;
    margin:0, ${props => props.theme.spacing(1)};
    @media(max-width:768px){
        width:95vw;
    }
`

const AddBtn = styled(Button)`
    margin-top:${props => props.theme.spacing(3)};
    margin-bottom:${props => props.theme.spacing(2)};
`

const CustomAvatar = styled(Avatar)`
    width: 150px;
    height: 150px;
    margin:${props => props.theme.spacing(1)} 0;
`