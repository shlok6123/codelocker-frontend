import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Header({ currentUser, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            CodeLocker
          </Link>
        </Typography>

        {currentUser ? (
          // If user is logged in, show this:
          <Box>
            <Typography component="span" sx={{ mr: 2 }}>
              Welcome, {currentUser.username}
            </Typography>
            <Button color="inherit" onClick={handleLogoutClick}>Logout</Button>
          </Box>
        ) : (
          // If user is not logged in, show this:
          <Box>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;