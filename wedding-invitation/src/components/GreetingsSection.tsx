import React from 'react';

interface GreetingsSectionProps {
  groomParents: string;
  brideParents: string;
  invitationText: string;
}

const GreetingsSection: React.FC<GreetingsSectionProps> = ({
  groomParents,
  brideParents,
  invitationText,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed whitespace-pre-line animate-fadeIn">
          {invitationText}
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="animate-fadeInDelay">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              신랑 측 혼주
            </h3>
            <p className="text-base md:text-lg text-gray-600">
              {groomParents}
            </p>
          </div>
          <div className="animate-fadeInDelayMore">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              신부 측 혼주
            </h3>
            <p className="text-base md:text-lg text-gray-600">
              {brideParents}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreetingsSection;
