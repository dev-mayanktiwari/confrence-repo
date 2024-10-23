'use client';

import React from 'react';
import { Twitter, Facebook } from 'lucide-react';

export const ShareButtons = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="flex flex-col space-y-2 rounded-lg shadow-lg max-w-3xl mb-6 bg-white p-8">
      <h2 className="text-lg font-semibold mb-2">Share This</h2>
      <div className="flex space-x-4">
        <button
          onClick={shareOnTwitter}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition-colors"
        >
          <Twitter size={20} />
          <span>Twitter</span>
        </button>
        
        <button
          onClick={shareOnFacebook}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Facebook size={20} />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};
