import React from 'react';

import {
  CardStyled,
  CardMainText,
  CardText,
  CardLabel
} from './styles';

const FilmCard = ({ film }) => {
  return (
    <CardStyled>
      <CardMainText>{film.title}</CardMainText>
      <CardText>
          <CardLabel>Description: </CardLabel>
          { film.opening_crawl }<br/>
          <CardLabel>Director: </CardLabel>
          { film.director }<br/>
          <CardLabel>Producer: </CardLabel>
          { film.producer }<br/>
          <CardLabel>Release date: </CardLabel>
          { film.release_date }<br/>

      </CardText>
    </CardStyled>
  );
};

export default FilmCard;
