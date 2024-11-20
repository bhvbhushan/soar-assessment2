import React from 'react';

interface LogoProps {
  src: string; // Image path
  width?: number | string; // Width can be number (pixels) or string (e.g., '50%')
  height?: number | string; // Height can be number (pixels) or string
  alt?: string; // Alternative text for accessibility
}

const LogoIconComponent: React.FC<LogoProps> = ({
  src,
  width,
  height,
  alt = 'Logo',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width || 'auto',
        height: height || 'auto',
        display: 'block', // Ensures there are no unexpected spaces below the image
      }}
    />
  );
};

export default LogoIconComponent;
