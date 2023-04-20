import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '../components/app/Main/AppBar';
import Drawer from '../components/app/Main/Drawer';
import DrawerHeader from '../components/app/Main/DrawerHeader';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

type MiniDrawerProps = {
  content: React.ReactNode;
};

export default function MiniDrawer({ content }: MiniDrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleLinkClick = text => {
    switch (text) {
      case 'Screener':
        navigate('/screener');
        break;
      case 'Settings':
        navigate('/settings');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%', background: 'var(--cl-dark-blue-gray)' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Live crypto screener
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon sx={{ fill: 'var(--cl-white)' }} />
            ) : (
              <ChevronLeftIcon sx={{ fill: 'var(--cl-white)' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {['Dashboard', 'Screener', 'Settings'].map(text => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => handleLinkClick(text)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text === 'Screener' && <BarChartIcon sx={{ fill: 'var(--cl-white)' }} />}
                  {text === 'Dashboard' && <DashboardIcon sx={{ fill: 'var(--cl-white)' }} />}
                  {text === 'Settings' && <SettingsIcon sx={{ fill: 'var(--cl-white)' }} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: 'var(--cl-white)' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div>{content}</div>
      </Box>
    </Box>
  );
}
