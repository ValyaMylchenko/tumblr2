import React from 'react';
import s from './News.module.css';
import Post from '../Post/Post';
import FunctionalContainer from '../Functional/FunctionalContainer';

function News(props) {
  let news = props.state.newsPage.posts.map(p => <Post text={p.text} count={p.likescount}/>)
  return (

    <div className={s.main}>
      <FunctionalContainer/>
      <div className={s.mainNews}>
        {news}
      </div>
    </div>

  );
}

export default News;