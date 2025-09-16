import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography, Button } from '@mui/material';
import { theme } from './theme/theme';
import './styles/global.css';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box py={6} display="flex" flexDirection="column" gap={2}>
          <Typography variant="h4" component="h1">
            React 19 + TypeScript + MUI + Vite
          </Typography>
          <Typography color="text.secondary">專案初始化完成。</Typography>
          <Button variant="contained">開始開發</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
