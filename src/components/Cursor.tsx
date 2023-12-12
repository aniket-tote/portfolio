"use client";

import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
        setTimeout(() => {
            setPosition({ x: e.clientX, y: e.clientY });
          }, 100); 
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>;
};

export default Cursor;
