import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import '../dashboard/style.css';



export default function Menu({ open }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleDrawer = (newOpen) => () => {
    //setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: open === false ?"100%":"215px", }}
      //role="presentation"
      //onClick={toggleDrawer(false)}
      className='menu_row'
    >
      <nav aria-label="main mailbox folders" 
      // style={{width:"100px !important", position:'fixed',zIndex:'999 !important'}}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('/home')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Home" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('/about')}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              {open && <ListItemText primary="About" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('/contact')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Contact" />}
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  return (
    <div className='menu_box'>
      <Drawer variant="permanent" open={open}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
