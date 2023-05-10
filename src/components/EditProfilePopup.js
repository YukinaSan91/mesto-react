import React from 'react';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  };

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm 
      name="edit" 
      title="Редактировать профиль" 
      buttonText="Сохранить" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}>
        <input
          id="input-name"
          className="popup__text popup__text_type_name"
          name="forename"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChangeName}
          value={name || ""}/>
        <span className="input-name-error popup__text-input-error" type="text"></span>
        <input
          id="input-job"
          className="popup__text popup__text_type_job"
          name="job"
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          onChange={handleChangeDescription}
          value={description || ""}/>
        <span className="input-job-error popup__text-input-error" type="text"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;