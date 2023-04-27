import { useEffect, useState } from 'react';
import profileAvatar from '../images/image.jpg';
import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState("Жак-Ив-Кусто");
  const [userInfo, setUserInfo] = useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = useState(profileAvatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo(userName, userInfo, userAvatar)
      .then((data) => {
        setUserName(data.name);
        setUserInfo(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
    })

    useEffect(() => {
      api
        .getInitialCards(cards)
        .then((card) => {
          setCards(card);
        })
        .catch((err) => {
          console.log(err);
        })
      })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar">
          <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар"/>
          <button className="profile__btn-avatar" name="edit-avatar" type="button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{`${userName}`}</h1>
          <button className="profile__popup-open" name="popup-open" type="button" onClick={onEditProfile}></button>
          <p className="profile__text">{`${userInfo}`}</p>
        </div>
        <button aria-label="добавить" className="profile__add-button" name="add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;