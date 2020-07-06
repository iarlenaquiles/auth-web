import React from 'react';

import {
  CardStyled,
  CardMainText,
  CardText,
  CardLabel,
} from './styles';

const PlanetCard = ({ planet }) => {
  return (
    <CardStyled>
      <CardMainText>{planet.name}</CardMainText>
      <CardText>
          <CardLabel>Rotation Period: </CardLabel>
          { planet.rotation_period }<br/>
          <CardLabel>Climate: </CardLabel>
          { planet.climate }<br/>
          <CardLabel>Gravity: </CardLabel>
          { planet.gravity }<br/>
          <CardLabel>Population: </CardLabel>
          { planet.population }<br/>

      </CardText>
    </CardStyled>
  );
};

export default PlanetCard;
