import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddCardPopup({isOpen, onClose, onAddPlace}) {
    const nameRef = useRef();
    const linkRef = useRef();

  useEffect(() => {
    nameRef.current.value = "";
    linkRef.current.value = "";
  }, [isOpen]);
  
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  };

  return (
    <PopupWithForm 
      name="add" 
      title="Новое место" 
      buttonText="Создать"
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}>
      <input
        id="input-title"
        className="popup__text popup__text_type_title"
        name="name"
        type="text"
        ref={nameRef}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required/>
      <span className="input-title-error popup__text-input-error" type="text"></span>
      <input
        id="input-url"
        className="popup__text popup__text_type_url"
        name="url"
        type="url"
        ref={linkRef}
        placeholder="Ссылка на картинку"
        required/>
      <span className="input-url-error popup__text-input-error" type="text"></span>
    </PopupWithForm>
  );
}

export default AddCardPopup;