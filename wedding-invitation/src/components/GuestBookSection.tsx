import React from 'react';

interface GuestBookSectionProps {
  // Currently no props, but defined for consistency and future use.
}

const GuestBookSection: React.FC<GuestBookSectionProps> = () => {
  const exampleMessages = [
    {
      name: '김철수',
      message: '두 분의 아름다운 시작을 진심으로 축하드립니다. 언제나 서로 아끼고 사랑하며 행복한 가정을 이루시길 바랍니다. 꽃길만 걸으세요!',
      date: '2024년 10월 26일',
    },
    {
      name: '이영희',
      message: '결혼을 축하하며, 두 분의 앞날에 항상 사랑과 행복이 가득하기를 기원합니다. 멋진 부부가 되실 거예요!',
      date: '2024년 10月 27일',
    },
    {
      name: '박지민 & 로제',
      message: 'Congratulations on your beautiful wedding! Wishing you both a lifetime of love, laughter, and endless joy. So happy for you!',
      date: '2024-10-28',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center animate-fadeInUp">
          축하 메시지
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-12 text-center max-w-xl mx-auto leading-relaxed animate-fadeInUp">
          여러분의 따뜻한 축하 말씀은 신랑 신부에게 큰 힘이 됩니다. 소중한 마음을 나누어주세요.
        </p>
        <div className="space-y-8 max-w-2xl mx-auto animate-fadeInDelay">
          {exampleMessages.map((msg, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <p className="text-lg font-semibold text-rose-700 mb-2">{msg.name}</p>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed mb-3">{msg.message}</p>
              <p className="text-sm text-gray-400 text-right">{msg.date}</p>
            </div>
          ))}
        </div>
        {/* Placeholder for future guest book form */}
        <div className="mt-12 text-center animate-fadeInDelayMore">
          <button 
            type="button"
            className="px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition-colors duration-300"
            aria-label="축하 메시지 남기기 (기능 구현 예정)"
          >
            축하 메시지 남기기 (준비중)
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuestBookSection;
