// ----------Контрольовані елементи-----------

// Щоб зробити input контрольованим елементом, потрібно виконати два кроки:

// Атрибуту value потрібно передати значення стану inputValue.
// При події onChange отримати значення поля і записати його в стан inputValue.

import { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
