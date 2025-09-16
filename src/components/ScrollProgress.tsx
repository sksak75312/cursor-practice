import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 2000 }}>
      <Box
        component={motion.div}
        style={{ scaleX: scrollYProgress }}
        sx={{ originX: 0, height: '100%', bgcolor: 'primary.main' }}
      />
    </Box>
  );
};
