
import React from 'react';
import { LATEST_NEWS } from '../constants';

const NewsSection: React.FC<{ isBigText: boolean }> = ({ isBigText }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className={`${isBigText ? 'text-5xl' : 'text-4xl'} font-black tracking-tight`}>
              NH농협손해보험 <span className="text-nh-green">소식</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">보험 그 이상의 가치를 전달하는 다양한 소식을 확인하세요.</p>
          </div>
          <button className="hidden md:flex items-center space-x-2 font-bold text-gray-700 hover:text-nh-green hover:translate-x-1 transition-all">
            <span>더 많은 소식 보기</span>
            <i className="fa-solid fa-plus text-xs"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {LATEST_NEWS.map((news) => (
            <div key={news.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[32px] aspect-[16/10] mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-nh-green shadow-sm group-hover:bg-nh-green group-hover:text-white transition-all">
                  {news.category}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className={`${isBigText ? 'text-xl' : 'text-lg'} font-bold leading-snug group-hover:text-nh-green transition-colors line-clamp-2`}>
                  {news.title}
                </h3>
                <p className="text-gray-600 text-base font-medium line-clamp-2 leading-relaxed">
                  {news.excerpt}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-gray-600 transition-colors">{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
          <button className="border border-gray-200 px-8 py-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 hover:border-nh-green hover:text-nh-green transition-all w-full">
            더 많은 소식 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
