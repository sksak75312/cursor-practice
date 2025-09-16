import React from 'react';
import { Box, Container, Typography, Button, Card, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

type SectionCardProps = {
  index: string;
  title: string;
  description: string;
  cta?: string;
  imageUrl: string;
  reverse?: boolean;
};

export const SectionCard: React.FC<SectionCardProps> = ({
  index,
  title,
  description,
  cta = '瞭解更多',
  imageUrl,
  reverse,
}) => {
  return (
    <Box component="section" sx={{ py: { xs: 5, sm: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, sm: 5, md: 6 },
            alignItems: 'stretch',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr' },
            gridTemplateAreas: {
              xs: '"content" "media"',
              sm: '"content" "media"',
              md: reverse ? '"media content"' : '"content media"',
            },
          }}
        >
          <Box
            component={motion.div}
            sx={{ gridArea: 'content', alignSelf: 'center' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Typography variant="h2" sx={{ opacity: 0.06, fontWeight: 800 }}>
              {index}
            </Typography>
            <Typography variant="overline" color="text.secondary">
              開始探索
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, my: 1 }}>
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <Button variant="text" color="primary" size="small">
              {cta}
            </Button>
          </Box>
          <Box
            component={motion.div}
            sx={{ gridArea: 'media' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Card sx={{ boxShadow: 0, height: '100%' }}>
              <Box
                sx={{
                  height: { xs: 200, sm: 260, md: 360 },
                  width: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  image={imageUrl}
                  alt={title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
