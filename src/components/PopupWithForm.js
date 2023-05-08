import usePopupClose from "../hooks/usePopupClose";

function PopupWithForm({name, title, children, buttonText, isOpen, onClose, onSubmit}) {
  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__heading">{`${title}`}</h2>
        <form className="popup__form popup__form_type_edit" name={`${name}`} onSubmit={onSubmit} noValidate>
          {children}
          <button className="popup__save-button" type="submit">{`${buttonText}`}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;