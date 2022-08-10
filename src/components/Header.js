import React, { useState } from 'react'
import {
    Container, AppBar, Box, Toolbar, IconButton, Typography,
    Menu, Button, MenuItem, InputBase, Tooltip, Avatar
} from "@mui/material";
import styled, { css } from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const pages = [{ name: 'Register', link: 'register' },
{ name: 'Friends', link: 'friends' }, { name: 'Profile', link: 'profile' }];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <CustomAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CompanyLogo
                        variant="h6"
                        noWrap
                        component="a"
                        href="/">
                        ABC Company
                    </CompanyLogo>
                    <CustomMenuBox>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            anchorEl={anchorElNav}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </CustomMenuBox>
                    <MobileCompanyLogo
                        variant="h5"
                        noWrap
                        component="a"
                        href="">
                        ABC Company
                    </MobileCompanyLogo>
                    <PagesBox>
                        {pages.map((page) => (
                            <PageBtn
                                key={page.name}
                                onClick={() => { navigate(page.link) }}>
                                {page.name}
                            </PageBtn>
                        ))}
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Users"
                            />
                        </Search>
                    </PagesBox>
                    <Tooltip title="user name">
                        <Avatar />
                    </Tooltip>
                </Toolbar>
            </Container>
        </CustomAppBar>
    )
}

export default Header;

const CustomAppBar = styled(AppBar)`
    width:100vw;
    caret-color: transparent;
    margin-bottom:${props => props.theme.spacing(2)};
`

const responsiveFeatureMobileOff = css`
    display:flex;
    @media(max-width:768px){
        display:none;
    }
`

const responsiveFeatureMobileOn = css`
    display:none;
    @media(max-width:768px){
        display:flex;
        flex-grow:1;
    }
`

const CompanyLogo = styled(Typography)`
    margin-right:${props => props.theme.spacing(2)};
    font-family:monospace;
    font-weight:600;
    letter-spacing:.15rem ;
    color: inherit;
    text-decoration:none;
    ${responsiveFeatureMobileOff}
`

const MobileCompanyLogo = styled(CompanyLogo)`
    ${responsiveFeatureMobileOn}
    letter-spacing:.05rem;
`

const CustomMenuBox = styled(Box)`
    ${responsiveFeatureMobileOn}
`

const PagesBox = styled(Box)`
    ${responsiveFeatureMobileOff};
    flex-grow:1;
`

const PageBtn = styled(Button)`
    color:white;
    padding-bottom:0;
`

const Search = styled.div`
    position: relative;
    border-radius: ${({ theme }) => theme.shape.borderRadius};
    background-color: rgba(255,255,255,0.15);
    margin-left:${({ theme }) => theme.spacing(1)};
    width: auto;
    &:hover{
        background-color: rgba(255,255,255,0.25);
    }
    @media(max-width:768px){
        width:100%;
        margin-left:0;
    }
`

const SearchIconWrapper = styled.div`
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(2)}`};
    height: 100%;
    position: absolute;
    pointer-events:none;
    display:flex;
    align-items:center;
    justify-content:center ;
`

const StyledInputBase = styled(InputBase)`
    color:inherit;
    .MuiInputBase-input{
        padding: ${({ theme }) => `${theme.spacing(1)}`};
        padding-left:calc(1em + ${({ theme }) => `${theme.spacing(4)}`});
        transition:${({ theme }) => theme.transitions.create('width')};
        caret-color: auto;
        width:13ch;
        &:focus{
           width:20ch; 
        }
        @media(max-width:768px){
            width:100%;
        }  
    }
`