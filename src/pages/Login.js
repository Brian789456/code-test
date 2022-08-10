import React, { useContext } from 'react'
import {
    TextField, Box, Typography,
    Container, CssBaseline, Button, Avatar
} from "@mui/material";
import styled from 'styled-components';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthContext from "../context/AuthProvider";

function Login() {
    const { setAuth } = useContext(AuthContext);

    const handleSubmit = () => {
        setAuth(true);//simplified
    }

    return (<Container component="main" maxWidth="lg">
        <CssBaseline />
        <CustomBox>
            <CustomAvatar>
                <LockOutlinedIcon />
            </CustomAvatar>
            <Typography variant="h4" component="h2" align='center' >Login</Typography>
            <FormBox component="form" autoComplete="off" onSubmit={handleSubmit}>
                <TextField label="Email Address" id="Email" type="email" margin="normal"
                    fullWidth required autoFocus />
                <TextField label="Password" id="Password" type="password" margin="normal"
                    fullWidth required />
                <LoginBtn
                    type="submit"
                    fullWidth
                    variant="contained">
                    Login
                </LoginBtn>
            </FormBox>
        </CustomBox>
    </Container>)
}

export default Login;

const CustomBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:${props => props.theme.spacing(1)};
    width:500px;
    @media(max-width:768px){
        width:95vw;
    }
`

const LoginBtn = styled(Button)`
    margin-top:${props => props.theme.spacing(3)};
    margin-bottom:${props => props.theme.spacing(2)};
`

const CustomAvatar = styled(Avatar)`
    margin:${props => props.theme.spacing(1)} 0;
    background-color:${props => props.theme.palette.secondary.main};
`