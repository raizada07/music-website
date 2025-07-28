// src/components/AudioPlayer.jsx
import React from 'react';

const AudioPlayer = ({ songUrl }) => {
  return (
    <audio controls className="w-full">
      <source src={songUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
