import React from 'react';

interface HeroSectionProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
  weddingTime: string;
  weddingVenue: string;
  welcomeMessage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  brideName,
  groomName,
  weddingDate,
  weddingTime,
  weddingVenue,
  welcomeMessage,
}) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-100 via-rose-50 to-amber-100 text-center">
      <div className="container mx-auto px-4">
        <p className="text-base md:text-lg text-rose-700 mb-6 tracking-wide animate-fadeIn">
          {welcomeMessage}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 animate-fadeInUp">
          {groomName}
          <span className="text-rose-500 mx-2">&amp;</span>
          {brideName}
        </h1>
        <div className="mb-6 text-gray-700 animate-fadeInDelay">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium">
            {weddingDate}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl">
            {weddingTime}
          </p>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-serif italic animate-fadeInDelayMore">
          {weddingVenue}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
