import logo from './logo.png';

function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Little Lemon Restaurant Logo"
        className="logo"
      />
    </header>
  );
}

export default Header;