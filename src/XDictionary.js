import React, { useState } from 'react';

const XDictionary = () => {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
    { word: 'Component', meaning: 'A reusable building block in React.' },
    { word: 'State', meaning: 'An object that stores data for a component.' }
  ]);

  // State for the search term and result
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  // Handle the search
  const handleSearch = () => {
    // Find the word in the dictionary, case-insensitive
    const entry = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (entry) {
      setResult(entry.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition: </h4>
      <p>{result}</p>
      
    </div>
  );
};

export default XDictionary;
