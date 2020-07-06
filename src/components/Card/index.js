import React from 'react';

import {
  CardStyled,
  CardMainText,
  CardText,
  CardLabel
} from './styles';

const Card = ({ character }) => {

  return (
    <CardStyled>
      <CardMainText>{character.name}</CardMainText>
      <CardText>
          <CardLabel>Gender: </CardLabel>
          { character.gender }<br/>
          <CardLabel>Height: </CardLabel>
          { character.height }<br/>
          <CardLabel>Mass: </CardLabel>
          { character.mass }<br/>
          <CardLabel>Birth Year: </CardLabel>
          { character.birth_year }<br/>

      </CardText>
    </CardStyled>
  );
};

export default Card;
