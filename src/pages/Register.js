import React, { useState } from 'react'
import {
    TextField, Box, Typography,
    Container, CssBaseline, Button, Avatar
} from "@mui/material";
import styled from 'styled-components';
import Dropzone from 'react-dropzone'
let numOfRenderings = 0;

function Register() {
    const [file, setFile] = useState(null);

    const profileOnDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    }

    return (<Container component="main" >
        <CssBaseline />
        <CustomBox>
            <Typography variant="h4" component="h2" align='center'>Register</Typography>
            <Typography variant="h6" component="h3" align='center'>(Number of Rendering is {numOfRenderings})</Typography>
            <FormBox component="form" autoComplete="off" >
                <HiddenDiv>{numOfRenderings++}</HiddenDiv>
                <CustomAvatar src={file ? URL.createObjectURL(file) : ""} />
                <UpdateBtn variant="contained" component="label" color="primary">
                    Upload
                    <Dropzone onDrop={profileOnDrop}
                        accept={{
                            'image/*': ['.jpeg', '.png']
                        }}
                        multiple={false}>
                        {({ getInputProps }) => (
                            <input {...getInputProps()} />
                        )}
                    </Dropzone>
                </UpdateBtn>
                <TextField
                    label="Name" id="Name" margin="normal" fullWidth required autoFocus />
                <TextField label="Email Address" id="Email" type="email" margin="normal"
                    fullWidth required />
                <TextField label="Phone Number" id="Phone Number" type="tel" margin="normal"
                    fullWidth required />
                <TextField label="Company" id="Company" margin="normal" fullWidth required />
                <TextField label="Password" id="Password" type="password" margin="normal"
                    fullWidth required />
                <RegisterBtn
                    type="submit"
                    fullWidth
                    variant="contained">
                    Register
                </RegisterBtn>
            </FormBox>
        </CustomBox>
    </Container>)
}

export default Register;

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
    margin:0, ${props => props.theme.spacing(1)};
    @media(max-width:768px){
        width:95vw;
    }
`

const RegisterBtn = styled(Button)`
    margin-top:${props => props.theme.spacing(3)};
    margin-bottom:${props => props.theme.spacing(2)};
`

const CustomAvatar = styled(Avatar)`
    width: 150px;
    height: 150px;
    margin:${props => props.theme.spacing(1)} 0;
`

const HiddenDiv = styled.div`
    display:none;
`

const UpdateBtn = styled(Button)`
    margin-bottom:${props => props.theme.spacing(1)};
`