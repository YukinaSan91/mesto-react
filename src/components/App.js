import React from 'react';
import profileAvatar from '../images/image.jpg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  //Стейт переменные
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [currentUser, setCurrentUser] = useState({avatar: profileAvatar, name: "Жак-Ив-Кусто", about: "Исследователь океана"});
  const [cards, setCards] = useState([]);

  //Получение данных
  useEffect(() => {
    api
      .getUserInfo(currentUser)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards(cards)
      .then((card) => {
        setCards(card);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  //Открытие попапов
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

  //Закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  //Добавление/удаление лайка
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .toggleCardLike(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      })
  };

  //Удаление карточки
  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    api
      .deleteUserCard(card._id, !isOwn)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body"> 
        <div className="page">
          <Header />
          <Main 
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
            onCardDelete={handleCardDelete}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
