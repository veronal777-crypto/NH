
import React from 'react';
import { TOP_SERVICES } from '../constants';
import wangguImg from '../assets/images/wanggu.png';

const Hero: React.FC<{ isBigText: boolean }> = ({ isBigText }) => {
  return (
    <section className="pt-[72px] md:pt-[104px] pb-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-[40px]">
        {/* Main Banner Wrapper */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#f1f5f8] min-h-[760px] flex flex-col transition-all duration-500">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-nh-green/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] bg-nh-yellow/20 rounded-full blur-[80px]"></div>
          </div>

          {/* Wang-gu Image (Moved to background layer) */}
          <div className="absolute bottom-0 right-[180px] h-full w-2/3 md:w-1/2 z-0 pointer-events-none flex items-end justify-end">
            <img src={wangguImg} alt="NH NongHyup Wang-gu Character" className="h-full object-contain drop-shadow-2xl opacity-90 scale-95" />
          </div>

          {/* Content Container (Padding 160px) */}
          <div className="relative w-full h-full px-8 md:px-[160px]">

            {/* Text Content */}
            <div className="relative z-10 w-full flex flex-col justify-center h-full pt-16 md:pt-28 pb-12">
              <div className="w-full md:w-3/5 space-y-8">
                <h1 className={`${isBigText ? 'text-5xl md:text-7xl' : 'text-4xl md:text-[64px]'} font-bold text-gray-900 leading-[1.1] tracking-tight`}>
                  당신의 건강을 지키는<br />
                  <span className="text-nh-green">든든한 파트너</span><br />
                  NH농협손해보험
                </h1>

                <p className={`${isBigText ? 'text-2xl' : 'text-xl'} text-gray-600 max-w-xl font-normal leading-relaxed`}>
                  고객 중심의 UX/UI 개편으로 더 쉽고 빠르게,<br />
                  농협만의 신뢰를 담아 새롭게 태어났습니다.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-nh-green text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:shadow-2xl hover:brightness-110 hover:-translate-y-1 active:scale-95 transition-all">
                    <span>맞춤 보험 추천받기</span>
                    <i className="fa-solid fa-chevron-right text-sm"></i>
                  </button>
                  <button className="bg-white text-gray-800 px-10 py-5 rounded-full font-bold text-lg border border-gray-100 hover:bg-gray-50 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 active:scale-95 transition-all">
                    이벤트 확인
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grouped Service Area */}
          <div className="relative z-20 w-full px-12 pb-12 mt-auto">
            <div className="bg-white/30 rounded-[16px] h-[128px] px-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all">
              {TOP_SERVICES.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="flex-1 w-full group flex items-center justify-between md:justify-start md:gap-4 p-6 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300">
                    {(item as any).image ? (
                      <img src={(item as any).image} alt={item.title} className="w-[40px] h-[40px] object-contain" />
                    ) : (
                      <i className={`fa-solid ${item.icon} text-2xl text-nh-green`}></i>
                    )}
                  </div>

                  <div className="flex-1 md:flex-none">
                    <div className="relative inline-block mb-1">
                      <span className={`block font-bold ${isBigText ? 'text-2xl' : 'text-xl'} text-gray-800 transition-colors`}>
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 group/shortcut">
                      <span className="text-sm text-[#555555] group-hover:text-gray-600 transition-colors">바로가기</span>
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-nh-green group-hover:scale-110">
                        <i className="fa-solid fa-arrow-right text-gray-400 group-hover:text-white text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;