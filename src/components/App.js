import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="body"> 
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input
            id="input-name"
            className="popup__text popup__text_type_name"
            name="forename"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required/>
          <span className="input-name-error popup__text-input-error" type="text"></span>
          <input
            id="input-job"
            className="popup__text popup__text_type_job"
            name="job"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required/>
          <span className="input-job-error popup__text-input-error" type="text"></span>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input
            id="input-title"
            className="popup__text popup__text_type_title"
            name="name"
            type="text"
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
            placeholder="Ссылка на картинку"
            required/>
          <span className="input-url-error popup__text-input-error" type="text"></span>
        </PopupWithForm>
        <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input
            id="input-avatar"
            className="popup__text popup__text_type_url-avatar"
            name="avatar"
            type="url"
            placeholder="Ссылка на картинку"
            required/>
          <span className="input-avatar-error popup__text-input-error" type="text"></span>
        </PopupWithForm>
        <PopupWithForm name="del-card" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
