import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 6, mt: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' }, gap: 4 }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              MNTN
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              出發去探索你的下一座山與目的地！
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 3 }}>
              版權所有 © 2025 MNTN, Inc. 服務條款 與 隱私權
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              部落格精選
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="#" underline="hover">
                關於 MNTN
              </MuiLink>
              <MuiLink href="#" underline="hover">
                作者與貢獻者
              </MuiLink>
              <MuiLink href="#" underline="hover">
                投稿給我們
              </MuiLink>
              <MuiLink href="#" underline="hover">
                聯絡我們
              </MuiLink>
              <MuiLink href="#" underline="hover">
                隱私權政策
              </MuiLink>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              更多關於 MNTN
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="#" underline="hover">
                團隊介紹
              </MuiLink>
              <MuiLink href="#" underline="hover">
                加入我們
              </MuiLink>
              <MuiLink href="#" underline="hover">
                媒體資源
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
