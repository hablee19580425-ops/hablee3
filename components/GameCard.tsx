import React, { useState } from 'react';
import { GameCardProps } from '../types';
import { LOCAL_IMAGE_PATH_PREFIX } from '../constants';
import { ExternalLink, Gamepad2 } from 'lucide-react';

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Construct the requested local path
  // Note: This will likely fail in a browser due to security policies, 
  // triggering the onError handler to show the placeholder.
  // We replace backslashes with forward slashes for better URL compatibility
  const fullPath = `${LOCAL_IMAGE_PATH_PREFIX}${game.filename}`;
  const localSrc = `file:///${fullPath.replace(/\\/g, '/')}`;
  
  // Fallback web image for demonstration purposes
  const placeholderSrc = `https://picsum.photos/id/${game.placeholderId}/280/280`;

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };

  return (
    <a 
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center p-4 transition-all duration-300 ease-out transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-indigo-500/20 rounded-2xl blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Card Container */}
      <div className="relative z-10 flex flex-col items-center bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 shadow-xl group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20 transition-all duration-300 w-full max-w-[200px]">
        
        {/* Image Container with specific 140x140 size constraint */}
        <div className="relative w-[140px] h-[140px] mb-4 rounded-xl overflow-hidden bg-slate-900 shadow-inner">
          <img
            src={imageError ? placeholderSrc : localSrc}
            alt={game.title}
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={140}
            height={140}
          />
          
          {/* Overlay on Hover */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <ExternalLink className="text-white w-8 h-8 opacity-80" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center w-full">
          <h3 className="text-white font-bold text-lg leading-tight tracking-tight group-hover:text-indigo-300 transition-colors">
            {game.title}
          </h3>
          <div className="h-0.5 w-0 bg-indigo-500 mt-2 mx-auto transition-all duration-300 group-hover:w-1/2 rounded-full" />
        </div>
      </div>
    </a>
  );
};