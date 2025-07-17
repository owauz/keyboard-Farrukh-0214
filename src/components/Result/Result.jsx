import './Result.scss';

const Result = ({ result }) => {
  if (!result) {
    return (
      <div className="result">
        <div className="error">
          <h2>😕</h2>
          <h4>Word not found</h4>
          <p>
            Sorry pal, we couldn't find definitions for the word you were looking for. 
            You can try the search again at a later time or head to the web instead.
          </p>
        </div>
      </div>
    );
  }

  const getMeaningByPart = (part) => {
    const match = result.meanings.find((m) => m.partOfSpeech === part);
    if (!match) return '';

    const defs = match.definitions.map((def, index) => (
      <li key={index}>
        <h4>{def.definition}</h4>
        {def.example && <><br /><em>Example:</em> "{def.example}"</>}
        {def.synonyms?.length > 0 && (
          <><br /><strong>Synonyms:</strong> {def.synonyms.join(', ')}</>
        )}
        {def.antonyms?.length > 0 && (
          <><br /><strong>Antonyms:</strong> {def.antonyms.join(', ')}</>
        )}
      </li>
    ));

    return (
      <div className="mean">
        <div className="parts">
          <h3>{part}</h3>
          <img src="/img/Rectangle.png" alt="D" />
        </div>
        <h4>Meaning</h4>
        <ul>{defs}</ul>
      </div>
    );
  };

  const meaningsEl = (
    <>
      {getMeaningByPart('noun')}
      {getMeaningByPart('verb')}
      {result.meanings
        .filter((m) => m.partOfSpeech !== 'noun' && m.partOfSpeech !== 'verb')
        .map((m, index) => (
          <div key={index}>{getMeaningByPart(m.partOfSpeech)}</div>
        ))}
    </>
  );

  return (
    <div className="result">
      <div className="wordCtn">
        <div className="word-info">
          <h2>{result.word}</h2>
          {result.phonetic && <p>{result.phonetic}</p>}
        </div>
        <img src="/img/play.png" alt="Play Audio" />
      </div>
      {meaningsEl}
    </div>
  );
};

export default Result;