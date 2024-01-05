import React from 'react';

const EmailButton = () => {
  const handleButtonClick = () => {
    const recipientEmail = 'frank.long98@gmail.com';
    const subject = '';
    const body = '';
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <button
      className="bg-green-500 hover:bg-green-700 px-2 rounded"
      onClick={handleButtonClick}
    >
      <img
        src="./mail.png"
        alt="Email Icon"
        className="w-12 h-9"
      />
    </button>
  );
};

export default EmailButton;