import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import SpaIcon from '@mui/icons-material/Spa';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#A9ECA2" }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
            <SpaIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Mary Jay
          </Typography>
          <Button color="inherit" href="#produtos">Produtos</Button>
          <Button color="inherit" href="#cadastro">Cadastro</Button>
          <Button color="inherit" href="#sobre">Sobre</Button>

        </Toolbar>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >Produtos</MenuItem>
        <MenuItem onClick={handleClose}>Cadastro</MenuItem>
        <MenuItem onClick={handleClose}>Sobre</MenuItem>
      </Menu>
    </div>
  );
}
