import React, { useCallback, useState } from 'react';
import './Search.scss';

export default function Search() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = useCallback(
    (e) => {
      let searchValue = e.target.value;
      setSearchText(searchValue);
    },
    [setSearchText]
  );

  return (
    <form onSubmit={(e) => {e.preventDefault()}} className={'search'}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder={'Поиск по названию картины'}
        className={'search__text search__input'}
      />
      <input type="submit" value="Найти" className={'search__btn search__input btn'}/>
    </form>
  );
}
