import React from 'react';
import { Hero } from '../components/Hero';
import { SectionCard } from '../components/SectionCard';
import { Showcase3D } from '../components/Showcase3D';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SectionCard
        index="01"
        title="找到適合自己的登山節奏"
        description="從挑選裝備、體能訓練到行程規劃，我們整理了實用心法與工具，帶你一步步建立專屬的登山步調。"
        imageUrl="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop"
      />
      <SectionCard
        index="02"
        title="多元露營場景靈感"
        description="無論是親子露營、溫泉野營或高山輕裝行，透過真實案例與照片，激發你下一次的戶外想像。"
        imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
        reverse
      />
      <SectionCard
        index="03"
        title="掌握天氣與安全變數"
        description="從氣象判讀、風險管理到急救準備，我們彙整實戰經驗，守護每一次冒險旅程的安心。"
        imageUrl="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop"
      />
      <Showcase3D />
      <Testimonials />
      <CTABanner />
    </>
  );
};
