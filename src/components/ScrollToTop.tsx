import React from 'react';
import { Box, Fab, useTheme } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion, useScroll } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const theme = useTheme();
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const unsub = scrollY.on('change', (v) => {
      setVisible(v > 200);
    });
    return () => {
      unsub();
    };
  }, [scrollY]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 16 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      sx={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: theme.zIndex.tooltip + 1,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Fab color="primary" size="medium" aria-label="scroll to top" onClick={handleClick}>
        <ArrowUpwardIcon />
      </Fab>
    </Box>
  );
};
