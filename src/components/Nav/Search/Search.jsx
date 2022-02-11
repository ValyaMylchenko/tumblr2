import React from 'react';
import s from './Search.module.css';


function Search() {
  return (
    <div className={s.search}>
      <form>
          <textarea className={s.textarea} >Search</textarea>
      </form>
    </div>
  );
}

export default Search;