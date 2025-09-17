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
import { Link as RouterLink } from 'react-router';

interface NavLinkItem {
  label: string;
  to?: string;
  href?: string;
}

const navLinks: NavLinkItem[] = [
  { label: '首頁', to: '/' },
  { label: '裝備列表', to: '/equipment' },
  { label: '行程規劃', href: '#' },
];

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
            {navLinks.map((link) =>
              link.to ? (
                <MuiLink
                  key={link.label}
                  component={RouterLink}
                  to={link.to}
                  underline="none"
                  color="inherit"
                >
                  {link.label}
                </MuiLink>
              ) : (
                <MuiLink key={link.label} href={link.href ?? '#'} underline="none" color="inherit">
                  {link.label}
                </MuiLink>
              ),
            )}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button size="small" variant="text" color="inherit">
              登入
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
            {navLinks.map((link) =>
              link.to ? (
                <ListItemButton key={link.label} component={RouterLink} to={link.to}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              ) : (
                <ListItemButton key={link.label} component="a" href={link.href ?? '#'}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              ),
            )}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Button fullWidth size="small" variant="outlined" color="inherit">
              註冊 / 登入
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};
