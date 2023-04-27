function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  };

  return (
    <div id="card-template">
      <article className="element">
        <img className="element__image" src={`${card.link}`} alt={`${card.name}`} onClick={handleClick}/>
        <button aria-label="удаление" className="element__del-button" name="del-button" type="button"></button>
        <div className="element__info">
          <h2 className="element__text">{`${card.name}`}</h2>
          <div className="element__like">
            <button aria-label="лайк" className="element__like-button" name="like-button" type="button"></button>
            <span className="element__like-counter">{`${card.likes.length}`}</span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card;