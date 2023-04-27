import headerLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Место Россия"/>
    </header>
  );
}

export default Header;