import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

type TiltCardProps = {
  title: string;
  image: string;
  desc: string;
};

const TiltCard: React.FC<TiltCardProps> = ({ title, image, desc }) => {
  return (
    <Box
      component={motion.div}
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      style={{ perspective: 1000 }}
      sx={{ willChange: 'transform' }}
    >
      <Card sx={{ borderRadius: 2, overflow: 'hidden', border: 1, borderColor: 'divider' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ height: 220, objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export const Showcase3D: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="text.secondary">
          體驗
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: { xs: 3, md: 4 } }}>
          靜態也能有互動的 3D 氛圍
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          <TiltCard
            title="高山日出"
            image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"
            desc="在山脊上感受日出，雲海與金色光束交織。"
          />
          <TiltCard
            title="森林步道"
            image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop"
            desc="涵氧量滿分，濃密的林蔭與潺潺溪流。"
          />
          <TiltCard
            title="湖畔露營"
            image="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop"
            desc="倒影與星空是最好的枕邊故事。"
          />
        </Box>
      </Container>
    </Box>
  );
};
