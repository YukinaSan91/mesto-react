function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__heading">{`${title}`}</h2>
        <form className="popup__form popup__form_type_edit" name={`${name}`} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;