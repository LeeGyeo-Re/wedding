import React from 'react';
import Image from 'next/image';

interface GallerySectionProps {
  imagePaths: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ imagePaths }) => {
  return (
    <section className="py-16 md:py-24 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center animate-fadeInUp">
          우리의 순간들
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 animate-fadeInDelay">
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 group"
            >
              <Image
                src={path}
                alt={`갤러리 사진 ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="transition-opacity duration-300 group-hover:opacity-90"
              />
              {/* You can add a caption or overlay here if desired in the future */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
