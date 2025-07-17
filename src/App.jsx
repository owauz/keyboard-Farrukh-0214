import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import './App.css';

const App = () => {
  const [font, setFont] = useState('sans');
  const [theme, setTheme] = useState('light');
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.body.style.fontFamily = 
      font === 'sans' ? '"Inter", sans-serif' :
      font === 'serif' ? '"Lora", serif' :
      '"Inconsolata", monospace';
    document.body.setAttribute('data-theme', theme);
  }, [font, theme]);

  const handleSearch = async () => {
    if (!word.trim()) {
      setError(true);
      setResult(null);
      return;
    }
    setError(false);
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setResult(response.data[0]);
    } catch (err) {
      setResult(null);
    }
  };

  return (
    <div className="wrapper">
      <Header font={font} setFont={setFont} theme={theme} setTheme={setTheme} />
      <Search word={word} setWord={setWord} handleSearch={handleSearch} error={error} />
      <Result result={result} />
    </div>
  );
};

export default App;