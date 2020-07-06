import React, { useState, useEffect } from 'react';
import swapi from '../../services/swapi';

import * as S from './styles';
import PlanetCard from '../PlanetCard';

export default function PlanetList() {
  const [planets, setPlanets] = useState([]);
  const [count, setCount] = useState(0);
  const [hasNext, setHasNext] = useState('');
  const [page, setPage] = useState(1);

  const initPlanets = async () => {

    const response = await swapi.get(`planets/?page=${page}`);

    setPlanets([...planets, ...response.data.results]);
    setCount(response.data.count);
    setHasNext(response.data.next);
  };

  useEffect(() => {
    initPlanets();
  }, []);

  function handleLoadMore() {
    setPage(page+1);
    initPlanets();
  }

  return (
    <S.ContainerStyled>
      <div className="row">
        <S.TitleStyled>Planets</S.TitleStyled>
        <S.PaginationCounterStyled>
          Mostrando {planets.length} de <b>{count}</b>
        </S.PaginationCounterStyled>
      </div>
      <S.ListStyled>
        {planets.map(char => (
            <PlanetCard
              key={char.id}
              planet={char}
            />
          ))}
      </S.ListStyled>
      {!!hasNext && <button onClick={handleLoadMore}>Load more</button>}

    </S.ContainerStyled>
  );
}
