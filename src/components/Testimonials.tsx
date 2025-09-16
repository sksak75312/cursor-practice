import React from 'react';
import { Box, Container, Typography, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const quotes = [
  {
    name: 'Iris',
    role: 'Trail Runner',
    content: '行前準備清單太實用了，每次比賽都靠它減少遺漏！',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Ken',
    role: 'Backpacker',
    content: '地圖離線功能救過我好幾次，深山走起來更有底氣。',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Mia',
    role: 'Photographer',
    content: '路況快報很即時，追星空與雲海時的風險更好掌握。',
    avatar: 'https://i.pravatar.cc/100?img=34',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="text.secondary">
          用戶回饋
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: { xs: 3, md: 4 } }}>
          來自真實用戶的聲音
        </Typography>

        <Box
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}
        >
          {quotes.map((q, i) => (
            <Paper
              key={q.name}
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              elevation={0}
              sx={{ p: 3, borderRadius: 2, border: 1, borderColor: 'divider' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={q.avatar} alt={q.name} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {q.name}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {q.role}
                  </Typography>
                </Box>
              </Box>
              <Typography sx={{ mt: 2 }} color="text.secondary">
                “{q.content}”
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
