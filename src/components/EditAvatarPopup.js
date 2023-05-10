import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  };

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="input-avatar"
        ref={avatarRef}
        className="popup__text popup__text_type_url-avatar"
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required/>
      <span className="input-avatar-error popup__text-input-error" type="text"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;