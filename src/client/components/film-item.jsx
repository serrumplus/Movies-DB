import React from 'react';

export const FilmItem = ({title, genre, date, imgUrl}) => (
  <React.Fragment>
    <img src={imgUrl} className="filmItem__img" />
    <div className="filmItem__description">
        <div className="filmItem__title">{title}</div>
        <div className="filmItem__releaseYear">{date}</div>
        
    </div>
  </React.Fragment>
)