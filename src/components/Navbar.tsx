import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const toggle = (next: boolean) => () => setOpen(next);

  return (
    <AppBar position="absolute" color="transparent" elevation={0} sx={{ top: 0 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            MNTN
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            <MuiLink href="#" underline="none" color="inherit">
              裝備
            </MuiLink>
            <MuiLink href="#" underline="none" color="inherit">
              關於我們
            </MuiLink>
            <MuiLink href="#" underline="none" color="inherit">
              部落格
            </MuiLink>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button size="small" variant="text" color="inherit">
              帳戶
            </Button>
          </Box>

          <IconButton
            size="small"
            color="inherit"
            onClick={toggle(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            aria-label="open navigation"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={toggle(false)}>
        <Box sx={{ width: 280, p: 1 }} role="presentation" onClick={toggle(false)}>
          <Box sx={{ px: 2, py: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              MNTN
            </Typography>
          </Box>
          <Divider />
          <List>
            <ListItemButton component="a" href="#">
              <ListItemText primary="裝備" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="關於我們" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="部落格" />
            </ListItemButton>
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Button fullWidth size="small" variant="outlined" color="inherit">
              登入 / 註冊
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};
