import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import RegistroButton from './RegistroButton';
import ProfileButton from './ProfileButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: '#eeeeee',
    margin: '0 10px',
    '&:hover': {
        color: '#ffffff',
    },
});

const Topbar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - 0)`,
                ml: "250px",
                boxShadow: "unset",
                backgroundColor: "#233044",
                color: "#eeeeee"
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div">
                    Auth0
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/client">Vista Cliente</StyledLink>
                    <StyledLink to="/admin">Vista Administrador</StyledLink>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {isAuthenticated ? (
                        <>
                            <LogoutButton />
                            <ProfileButton />
                        </>
                    ) : (
                        <>
                            <LoginButton />
                            <RegistroButton />
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
