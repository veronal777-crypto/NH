
import React from 'react';
import { DARK_GRID_SERVICES } from '../constants';

const FeatureGrid: React.FC<{ isBigText: boolean }> = ({ isBigText }) => {
  return (
    <section className="py-20 bg-white">
      {/* Outer fluid container with 40px side margins from screen edges */}
      <div className="w-full px-[40px]">
        {/* Dark Background Container with 32px radius */}
        <div className="bg-[#111827] text-white overflow-hidden rounded-[32px] py-20 md:py-28 px-6 md:px-10">
          {/* Centered Content Container at 1360px */}
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              {/* Left Heading Section */}
              <div className="lg:w-2/5 space-y-8">
                <div className="w-16 h-1 bg-nh-green rounded-full"></div>
                <h2 className={`${isBigText ? 'text-5xl' : 'text-4xl'} md:text-[52px] font-bold leading-[1.2] tracking-tight`}>
                  농협손보만의<br />
                  <span className="text-nh-green">차별화된 상품들을</span><br />
                  경험해보세요
                </h2>
                <div className="pt-4">
                  <button className="flex items-center space-x-3 font-bold text-white hover:text-nh-green transition-colors group">
                    <span>자세히 알아보기</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                  </button>
                </div>
              </div>

              {/* Right Content Grid */}
              <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {DARK_GRID_SERVICES.map((service, idx) => (
                  <div
                    key={service.title}
                    className={`
                      bg-[#1F2937] p-6 rounded-[24px] border border-gray-800 hover:border-[#eeeeee] hover:bg-[#252f3f] transition-all cursor-pointer group flex flex-col justify-between h-[180px]
                      ${service.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
                    `}
                  >
                    <div>
                      <h3 className={`${isBigText ? 'text-xl' : 'text-lg'} font-bold mb-2 group-hover:text-white transition-colors`}>{service.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-10 h-10 rounded-xl bg-[#111827] flex items-center justify-center group-hover:bg-white transition-colors">
                        <i className="fa-solid fa-chevron-right text-gray-500 group-hover:text-nh-green text-xs"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
