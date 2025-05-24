import React from 'react';

interface GiftInformationSectionProps {
  title: string;
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  message?: string;
  accountTypeLabel?: string; // e.g., "신랑 측 계좌"
}

const GiftInformationSection: React.FC<GiftInformationSectionProps> = ({
  title,
  accountHolderName,
  bankName,
  accountNumber,
  message,
  accountTypeLabel,
}) => {
  const showTitle = title && title.trim() !== ""; // Check if title is provided and not empty

  return (
    <section className={`py-12 ${showTitle ? 'md:py-16' : 'pt-0 md:pt-0'}`}> {/* Reduced top padding if no main title */}
      <div className="container mx-auto px-4 max-w-lg">
        {showTitle && (
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center animate-fadeInUp">
            {title}
          </h2>
        )}
        {message && showTitle && ( // Only show message if there's a main title for this section block
          <p className="text-base sm:text-lg text-gray-700 mb-10 text-center leading-relaxed animate-fadeInUp">
            {message}
          </p>
        )}
        
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 animate-fadeInDelay hover:shadow-xl transition-shadow duration-300">
          {accountTypeLabel && (
            <p className="text-sm text-rose-600 font-semibold mb-2 text-center sm:text-left">{accountTypeLabel}</p>
          )}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl text-gray-800 font-semibold">
              {accountHolderName}
            </p>
            <p className="text-base sm:text-lg text-gray-700 mt-1 mb-3">
              {bankName}: {accountNumber}
            </p>
          </div>
          <div className="mt-4 text-center sm:text-right">
            <button
              type="button"
              className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label={`${accountNumber} 계좌번호 복사하기 (기능 구현 예정)`}
            >
              계좌번호 복사
            </button>
          </div>
        </div>
        {!showTitle && message && ( // Show message below card if no main title (for the second card)
           <p className="text-sm text-gray-600 mt-6 text-center leading-relaxed animate-fadeInDelay">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default GiftInformationSection;
