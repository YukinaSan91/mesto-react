import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like-button ${isLiked && 'element__like-button_active'}` 
  );

  function handleClick() {
    onCardClick(card);
  };

  function handleLikeClick() {
    onCardLike(card);
  };

  function handleDeleteClick() {
    onCardDelete(card)
  };

  return (
    <div id="card-template">
      <article className="element">
        <img className="element__image" src={`${card.link}`} alt={`${card.name}`} onClick={handleClick}/>
        {isOwn && <button aria-label="удаление" className="element__del-button" name="del-button" type="button" onClick={handleDeleteClick}></button>}
        <div className="element__info">
          <h2 className="element__text">{`${card.name}`}</h2>
          <div className="element__like">
            <button aria-label="лайк" className={cardLikeButtonClassName} name="like-button" type="button" onClick={handleLikeClick}></button>
            <span className="element__like-counter">{`${card.likes.length}`}</span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card;