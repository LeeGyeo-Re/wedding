import React from 'react';

interface VenueInformationSectionProps {
  venueName: string;
  venueAddress: string;
  venueContact: string;
  mapPlaceholderText: string;
  transportationInfo: string; // Expecting string with newlines for different methods
}

const VenueInformationSection: React.FC<VenueInformationSectionProps> = ({
  venueName,
  venueAddress,
  venueContact,
  mapPlaceholderText,
  transportationInfo,
}) => {
  // Split transportationInfo by newline for better formatting
  const transportParts = transportationInfo.split('\n').filter(part => part.trim() !== '');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center animate-fadeInUp">
          오시는 길
        </h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center animate-fadeInDelay">
          <div className="text-left md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-rose-700 mb-4">
              {venueName}
            </h3>
            <div className="space-y-3 text-gray-700 text-base sm:text-lg">
              <p>
                <strong className="font-medium text-gray-800">주소:</strong> {venueAddress}
              </p>
              <p>
                <strong className="font-medium text-gray-800">연락처:</strong> {venueContact}
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                교통 안내
              </h4>
              <div className="space-y-2 text-gray-700 text-base sm:text-lg">
                {transportParts.map((part, index) => (
                  <p key={index}>{part}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-fadeInDelayMore">
            <div className="w-full aspect-[16/9] md:aspect-square bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Increased aspect ratio for better map display on mobile, square on md+ */}
              <p className="text-gray-500 text-lg">{mapPlaceholderText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueInformationSection;
