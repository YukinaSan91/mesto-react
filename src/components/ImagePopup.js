import usePopupClose from "../hooks/usePopupClose";

function ImagePopup({card, onClose}) {
  usePopupClose(card, onClose)

  return (
    <div className={`popup popup_type_image ${(Object.keys(card).length!==0) ? `popup_opened` : ""}`}>
      <div className="popup__card-image">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <img className="popup__image" src={`${card.link}`} alt={`${card.name}`} />
        <h2 className="popup__title">{`${card.name}`}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;