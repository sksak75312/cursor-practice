import React, { useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100svh',
        height: '100dvh',
        display: 'flex',
        alignItems: 'flex-end',
        color: 'common.white',
        overflow: 'clip',
      }}
    >
      <Box
        component={motion.div}
        style={{ y: bgY }}
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.35)', zIndex: 1 }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 6, md: 8 } }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            登山嚮導
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, maxWidth: 720, lineHeight: 1.1 }}>
            為高山與未知做好準備！
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
