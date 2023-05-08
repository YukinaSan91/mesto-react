import { useEffect } from 'react';

function usePopupClose(isOpen, closePopup) {
  useEffect(() => {
    if(!isOpen) return;

    const handleOverlay = (event) => {
      if(event.target.classList.contains("popup_opened")) {
        closePopup();
      };
      if (event.target.classList.contains('popup__close')) {
        closePopup();
      };
    };

    const handleEscape = (evt) => {
      if(evt.key === 'Escape') {
        closePopup();
      };
    };

    document.addEventListener('mousedown', handleOverlay);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleOverlay);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closePopup]);
}

export default usePopupClose;