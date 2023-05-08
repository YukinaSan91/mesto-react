import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, cards, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
          <button className="profile__btn-avatar" name="edit-avatar" type="button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__popup-open" name="popup-open" type="button" onClick={onEditProfile}></button>
          <p className="profile__text">{currentUser.about}</p>
        </div>
        <button aria-label="добавить" className="profile__add-button" name="add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card 
            key={card._id} 
            card={card} 
            onCardClick={onCardClick} 
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}/>
        ))}
      </section>
    </main>
  );
}

export default Main;