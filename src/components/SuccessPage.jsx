import React, { useState } from 'react';

const SuccessPage = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <center className='thanks-container'>
      {imageLoaded ? (
        <img 
          className="thanksImg" 
          src="https://i.ibb.co/0r4275m/Thank-You-Img.webp" 
          alt="Thanks" 
          onError={handleImageError}
        />
      ) : (
        <h1>Thank You For Registering!</h1>
      )}
    </center>
  );
};

export default SuccessPage;
