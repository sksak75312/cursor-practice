import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export const CTABanner: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
            borderRadius: 2,
            border: 1,
            borderColor: 'divider',
            background:
              'radial-gradient(1200px 400px at 10% -50%, rgba(25,118,210,0.25) 0, rgba(25,118,210,0) 60%)',
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              準備好展開你的下一段旅程？
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              立即註冊，解鎖離線地圖與進階規劃工具。
            </Typography>
          </Box>
          <Button variant="contained" color="primary" size="large">
            開始使用
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};
