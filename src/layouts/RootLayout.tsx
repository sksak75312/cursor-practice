import React from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../theme/theme';
import '../styles/global.css';
import { Navbar } from '../components/Navbar';
import { ScrollProgress } from '../components/ScrollProgress';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export const RootLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <ScrollProgress />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};
