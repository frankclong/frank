import React from 'react';

const LinkedInButton = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.linkedin.com/in/frankclong';
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 rounded flex mr-4"
      onClick={handleButtonClick}
    >
      <img
        src="./linkedin2.png"
        alt="LinkedIn Icon"
        className="w-16 h-16"
      />
    </button>
  );
};

export default LinkedInButton;