import './Header.scss';

const Header = ({ font, setFont, theme, setTheme }) => {
  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="head">
      <img src="/img/iconoir_book.png" alt="Book Icon" />
      <div className="head-right">
        <select className="select" value={font} onChange={handleFontChange}>
          <option value="sans">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
        </select>
        <label className="switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={handleThemeChange} />
          <span className="slider"></span>
        </label>
        <div className="mode">
          <img src={theme === 'dark' ? '/img/dark.png' : '/img/moon.png'} alt="Mode Icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;