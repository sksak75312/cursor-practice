import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import './styles/global.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionCard } from './components/SectionCard';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Showcase3D } from './components/Showcase3D';
import { Testimonials } from './components/Testimonials';
import { CTABanner } from './components/CTABanner';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <SectionCard
        index="01"
        title="你的登山等級是什麼？"
        description="辨識自身的健行等級能幫助你規劃更合適的路線。這份等級指南會參考不同平台的評級，協助你安排下一趟路線。"
        imageUrl="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop"
      />
      <SectionCard
        index="02"
        title="挑選合適的登山裝備"
        description="剛開始健行其實不需要太多專業裝備；善用手邊既有的，並逐步升級最常用的品項即可。"
        imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
        reverse
      />
      <SectionCard
        index="03"
        title="掌握地圖與時間管理"
        description="先列印路線指南與地圖，下雨時以防水袋保護；出發前充分閱讀與熟悉，心中預演整段路線的狀況。"
        imageUrl="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop"
      />
      <Showcase3D />
      <Testimonials />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};
