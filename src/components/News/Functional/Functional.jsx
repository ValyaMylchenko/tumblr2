import React from 'react';
import NewsForm from './FormN';
import s from './Functional.module.css';
 

function Functional(props) {


let addNews = (text) => {
  props.addNews(text);
}

  return (
    
            
          <div className={s.blockF}>
            <img src = 'https://i.pinimg.com/564x/27/1e/92/271e928230d89fccf6b8cadc4e3cfff0.jpg' className={s.img}/>
            <div className={s.func}>
            <div className={s.mainFunctional}>
            <a href="#" className={s.link}><div className={s.blo}><img src='https://64.media.tumblr.com/bba1c4f93a00d4924d39e96933fb8986/13ccc11839dffde9-a2/s540x810/2a91a98bdd20fd9e2b653ef0acbec986b0c9a808.png' className={s.icon}/><span className={s.span}>Text</span></div></a>
            <a href="#" className={s.link}><div className={s.blo}><img src='https://64.media.tumblr.com/eb73884f27698dcb998563e7f1e86550/13ccc11839dffde9-a4/s250x400/5cb7f18ff0194c04985d2de90c8d55a5688ffa58.png' className={s.icon}/><span className={s.span}>Photo</span></div></a>
            <a href="#" className={s.link}><div className={s.blo}><img src='https://64.media.tumblr.com/76e901a14197e3dc307904137f5c6d06/13ccc11839dffde9-4e/s1280x1920/0eeb56107407167f728ca5b866aa03b88a2dff1f.png' className={s.icon}/><span className={s.span}>Music</span></div></a>
            <a href="#" className={s.link}><div className={s.blo}><img src='https://64.media.tumblr.com/2efec694cb99b1cf7f1518653bc0f866/13ccc11839dffde9-28/s400x600/ff6e69ec746d611a5b2e141c3af0948b4d99d16b.png' className={s.icon}/><span className={s.span}>Video</span></div></a>
            </div>
            <NewsForm addNews={addNews}/>
            {/* <div>
              <textarea value={props.t} onChange={onPostChange}/>
              <button onClick={ addNews }>Sent!</button>
            </div> */}
            
          </div>
          
          </div>
          
        
        
  );
}

export default Functional;