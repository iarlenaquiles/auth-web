import React from 'react';

import {
  CardStyled,
  CardMainText,
  CardText,
  CardLabel,
} from './styles';

const StarshipCard = ({ starship }) => {

  return (
    <CardStyled>
      <CardMainText>{starship.name}</CardMainText>
      <CardText>
          <CardLabel>Model: </CardLabel>
          { starship.model }<br/>
          <CardLabel>Manufacturer: </CardLabel>
          { starship.manufacturer }<br/>
          <CardLabel>Passengers: </CardLabel>
          { starship.passengers }<br/>
      </CardText>
    </CardStyled>
  );
};

export default StarshipCard;
