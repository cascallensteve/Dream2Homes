import React from 'react';

const Logo = ({ size = 'default', className = '' }) => {
  const sizeClasses = {
    small: 'w-10 h-10',
    default: 'w-16 h-16',
    medium: 'w-20 h-20',
    large: 'w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32',
    xlarge: 'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40',
    hero: 'w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1755184581/Dreams_G16_zqvikm.png"
        alt="Dreams2Home Logo"
        className={`${sizeClasses[size]} object-contain`}
        onError={(e) => {
          // Fallback to text logo if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <span 
        className={`font-bold text-blue-600 ${sizeClasses[size]} flex items-center justify-center`}
        style={{ display: 'none' }}
      >
        D2H
      </span>
    </div>
  );
};

export default Logo; 