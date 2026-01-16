
import React from 'react';
import logoImg from '../assets/images/nf_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f2f2f2] pt-20 pb-16">
      <div className="max-w-[1920px] mx-auto px-[40px]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center group cursor-pointer">
              <img
                src={logoImg}
                alt="NH NongHyup Logo"
                className="w-[176px] h-[28px] object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <p className="text-lg text-gray-500 max-w-sm leading-relaxed font-medium">
              농업인의 실익증진과 고객의 행복한 미래를 위해 정성을 다하는 동반자가 되겠습니다.
            </p>
            <div className="flex space-x-4 pt-4">
              {['youtube', 'facebook', 'instagram', 'blog'].map(platform => (
                <a key={platform} href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-nh-green hover:text-white hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all">
                  <i className={`fa-brands fa-${platform === 'blog' ? 'blogger-b' : platform} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">보험상품</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">자동차보험</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">운전자보험</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">화재/재물보험</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">저축/보장보험</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">고객지원</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">사고접수/보상</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">증명서 발급</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">서식함</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">회사소개</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">CEO 인사말</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">연혁</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">윤리경영</a></li>
              <li><a href="#" className="hover:text-nh-green hover:pl-2 transition-all">사회공헌</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">고객센터</h4>
            <div className="space-y-4 group cursor-pointer">
              <div className="text-2xl font-black text-nh-green group-hover:scale-105 transition-transform origin-left">1544-0000</div>
              <p className="text-xs text-gray-400 font-bold leading-relaxed">
                평일 09:00 ~ 18:00<br />
                (주말/공휴일 휴무)
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm font-bold text-gray-400">
            <a href="#" className="text-gray-900 hover:text-nh-green transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-gray-900 transition-colors">신용정보활용체제</a>
            <a href="#" className="hover:text-gray-900 transition-colors">전자금융거래표준약관</a>
          </div>
          <div className="text-sm text-gray-400 font-medium">
            © 2025 NH NongHyup Non-life Insurance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
