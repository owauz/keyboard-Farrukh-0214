import './Search.scss';

const Search = ({ word, setWord, handleSearch, error }) => {
  return (
    <div className="ctn">
    <div className={`searchCtn ${error ? 'error' : ''}`}>
      <input
        type="search"
        className="input"
        placeholder="Search for any word…"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSearch} className='btn'>
        <img src="/img/search.png" alt="Search" className="btn" />
      </button>


      
    </div>
    <p className="eror" style={{ display: error ? 'block' : 'none' }}>
        Whoops, can’t be empty…
      </p>
    </div>
    
    
  );
};

export default Search;