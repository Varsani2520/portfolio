'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import arrowUpImage from '../../public/Images/top-arrow.png'; // Adjust the path based on your project structure

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    width: '40px',
    height: '40px',
    backgroundColor: '#333',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: isVisible ? '1' : '0',
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div style={buttonStyle} onClick={scrollToTop}>
      <Image src={arrowUpImage} alt="Back to Top" width={32} height={32} />
    </div>
  );
};

export default BackToTopButton;
