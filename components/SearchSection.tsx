
import React from 'react';

const SearchSection: React.FC = () => {
  const tags = ['다이렉트', '여행자보험', '펫보험', '스마트보상', '농업인특화'];
  
  return (
    <div className="max-w-[1920px] mx-auto px-[40px] -mt-10 relative z-20">
      <div className="bg-white rounded-[24px] shadow-2xl border border-gray-50 flex items-center p-3">
        <div className="pl-8 pr-4">
          <i className="fa-solid fa-magnifying-glass text-gray-400 text-xl"></i>
        </div>
        <input 
          type="text" 
          placeholder="어떤 보험이 궁금하신가요?" 
          className="flex-1 py-5 bg-transparent outline-none text-xl text-gray-700 placeholder-gray-400 font-medium"
        />
        <div className="hidden lg:flex items-center space-x-3 pr-4">
          <span className="text-gray-400 text-sm font-bold mr-2">인기검색어</span>
          {tags.map(tag => (
            <button key={tag} className="px-5 py-2.5 bg-gray-50 text-gray-600 text-sm font-bold rounded-xl hover:bg-nh-green hover:text-white transition-colors">
              #{tag}
            </button>
          ))}
        </div>
        <button className="bg-nh-green text-white px-12 py-5 rounded-[18px] font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-100">
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
