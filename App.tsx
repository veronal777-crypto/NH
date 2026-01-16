import React, { useState } from 'react';
import Header from './components/Header';
import wangguImg from './assets/images/wanggu.png';
import cabbageImg from './assets/images/cabbage_field.png';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isBigText, setIsBigText] = useState(false);

  const toggleBigText = () => setIsBigText(!isBigText);

  return (
    <div className={`min-h-screen ${isBigText ? 'big-text-mode' : ''}`}>
      <Header isBigText={isBigText} toggleBigText={toggleBigText} />

      <main>
        {/* 1. Main Hero Section */}
        <Hero isBigText={isBigText} />

        {/* 2. MZ & ESG Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1360px] mx-auto px-[40px]">
            <div className="flex flex-col md:flex-row items-center gap-16 overflow-hidden group/container">
              <div className="relative group/container cursor-pointer overflow-hidden rounded-[32px] w-full md:w-[calc(50%+80px)]">
                <img
                  src={cabbageImg}
                  alt="Daegwallyeong Cabbage Field"
                  className="rounded-[32px] w-full h-[400px] md:h-[500px] object-cover group-hover/container:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-[calc(50%-80px)] space-y-6">
                <h2 className={`${isBigText ? 'text-6xl' : 'text-5xl'} font-black leading-tight tracking-tight`}>
                  농업인과 함께 성장하는<br /> <span className="text-nh-green">따뜻한 디지털 금융</span>
                </h2>
                <p className={`${isBigText ? 'text-xl' : 'text-lg'} text-gray-600 font-medium leading-relaxed`}>
                  농협손해보험은 단순한 보험을 넘어 농촌의 발전과 고객의 삶의 질 향상을 위한 혁신적인 디지털 보험 서비스를 실천합니다.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-6 rounded-[24px] group hover:bg-nh-green transition-all cursor-default">
                    <div className="font-black text-2xl mb-1 text-nh-green group-hover:text-white transition-colors">98%</div>
                    <div className="text-xs font-bold text-gray-500 group-hover:text-white/80 transition-colors">농업인 가입 만족도</div>
                  </div>
                  <div className="p-6 rounded-[24px] group hover:bg-nh-green transition-all cursor-default">
                    <div className="font-black text-2xl mb-1 text-nh-green group-hover:text-white transition-colors">2.4조</div>
                    <div className="text-xs font-bold text-gray-500 group-hover:text-white/80 transition-colors">사회공헌 기여 금액</div>
                  </div>
                </div>
                <button className="flex items-center space-x-3 font-bold text-nh-green text-lg hover:translate-x-3 hover:brightness-110 active:translate-x-1 transition-all">
                  <span>우리의 지속가능한 이야기 보기</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Strategic Features */}
        <FeatureGrid isBigText={isBigText} />

        {/* 4. Latest News */}
        <NewsSection isBigText={isBigText} />

        {/* 5. Bottom CTA / Story Section */}
        <section className="py-20 bg-white">
          <div className="w-full px-[40px]">
            <div className="relative py-20 bg-[#1457a2] text-white overflow-hidden rounded-[32px] group/cta px-6 md:px-[120px]">

              <div className="relative z-10 text-center space-y-4">
                <h2 className={`${isBigText ? 'text-[44px] leading-[1.2]' : 'text-[32px] leading-[1.2]'} md:text-[44px] md:leading-[1.2] font-black tracking-normal group-hover/cta:scale-105 transition-transform duration-500`}>
                  <span className="font-bold">NH농협손해보험과 함께<br />더 안전한 미래를 만드세요</span>
                </h2>
                <p className="text-lg text-white/80 font-reguler max-w-xl mx-auto">
                  지금 바로 나에게 딱 맞는 보험을 확인하고 다양한 혜택을 받아보세요.
                </p>
                <div className="pt-4 flex justify-center space-x-4">
                  <button className="bg-white text-nh-green px-10 py-4 rounded-[1000px] font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
                    가입 상담 신청
                  </button>
                  <button className="bg-nh-green border border-white text-white px-10 py-4 rounded-[1000px] font-bold text-lg hover:bg-white hover:text-nh-green hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
                    상품 더보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Chatbot "Cozy" */}
      <button className="fixed bottom-10 right-10 w-20 h-20 bg-white shadow-2xl rounded-3xl flex items-center justify-center border-2 border-gray-50 z-50 hover:scale-110 hover:rotate-6 active:scale-90 transition-all group overflow-hidden">
        <div className="absolute inset-0 bg-nh-green translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative z-10 flex flex-col items-center">
          <i className="fa-solid fa-robot text-2xl mb-1 text-nh-green group-hover:text-white transition-colors"></i>
          <span className="text-[11px] font-black text-gray-700 group-hover:text-white transition-colors">코지상담</span>
        </div>
      </button>
    </div>
  );
};

export default App;