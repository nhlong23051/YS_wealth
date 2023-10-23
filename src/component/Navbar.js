import React from 'react'
import { Box, styled } from "@mui/material"
import ErrorIcon from '@mui/icons-material/Error';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const CustomNavbar = styled(Box)({
        width: "79px",
        height: "1086px",
        backgroundColor: "#005BAA",
        display: "grid",
        justifyContent: 'center',
        zIndex: "100",
        top: "0",
        position: 'fixed'
        // justifyContent:"space-between"
    })
    return (
        <CustomNavbar >
            <div>
                <NavLink to='/'>
                    <img style={{ width: "53px", height: "48px", margin: "19px 0 " }} src='https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/ac3889b0c2b0ac7664b413e6eceb1f98e3b5c2a3' alt='' />
                </NavLink>
                <div>
                    <img
                        style={{ width: "50px", height: "50px", margin: "10px 0" }}
                        src='https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/d3855812b36da220deb49b17ae00edf8f9380122' alt='' />

                    <img
                        style={{ width: "50px", height: "50px", margin: "10px 0" }}
                        src='https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/d3855812b36da220deb49b17ae00edf8f9380122' alt='' />

                    <img
                        style={{ width: "50px", height: "50px", margin: "10px 0" }}
                        src='https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/d3855812b36da220deb49b17ae00edf8f9380122' alt='' />

                    <img
                        style={{ width: "50px", height: "50px", margin: "10px 0" }}
                        src='https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/d3855812b36da220deb49b17ae00edf8f9380122' alt='' />

                    <img
                        style={{ width: "50px", height: "50px", margin: "10px 0" }}
                        src='https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/d3855812b36da220deb49b17ae00edf8f9380122' alt='' />
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "end" }}>
                <div></div>
                <div style={{ margin: "24px 0" }}>
                    <div style={{ backgroundColor: "gray", margin: "24px 0", borderRadius: "50%", width: "50px", height: "50px" }}></div>
                    <div>

                        <ErrorIcon sx={{ backgroundColor: "white", height: "50px", width: "50px", borderRadius: "50%" }} />
                    </div>
                </div>
            </div>
        </CustomNavbar>
    )
}