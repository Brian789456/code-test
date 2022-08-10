import React from 'react';
import Register from './pages/Register';
import { Grid } from "@mui/material";
import styled from 'styled-components';
import Header from './components/Header';
import Login from './pages/Login';
import Profile from './pages/Profile';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Friends from './pages/Friends';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid container>
          <CustomGrid item sm={12} >
            <Header />
          </CustomGrid>
          <CustomGrid item sm={12} >
            <Routes>
              <Route>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="friends" element={<Friends />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </CustomGrid>
          <CustomGrid item sm={12} >
            {/* footer */}
          </CustomGrid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;

const CustomGrid = styled(Grid)`
    display:flex;
    justify-content:center;
    align-items:center;
`