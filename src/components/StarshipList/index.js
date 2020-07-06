import React, { useState, useEffect } from 'react';
import swapi from '../../services/swapi';

import * as S from './styles';
import StarshipCard from '../StarshipCard';

export default function StarshipList() {
  const [starship, setStarship] = useState([]);
  const [count, setCount] = useState(0);
  const [hasNext, setHasNext] = useState('');
  const [page, setPage] = useState(1);

  const initStarship = async () => {

    const response = await swapi.get(`starships/?page=${page}`);

    setStarship([...starship, ...response.data.results]);
    setCount(response.data.count);
    setHasNext(response.data.next);
  };

  useEffect(() => {
    initStarship();
  }, []);

  function handleLoadMore() {
    setPage(page+1);
    initStarship();
  }

  return (
    <S.ContainerStyled>
      <div className="row">
        <S.TitleStyled>Starship</S.TitleStyled>
        <S.PaginationCounterStyled>
          Mostrando {starship.length} de <b>{count}</b>
        </S.PaginationCounterStyled>
      </div>
      <S.ListStyled>
        {starship.map(char => (
            <StarshipCard
              key={char.id}
              starship={char}
            />
          ))}
      </S.ListStyled>
      {!!hasNext && <button onClick={handleLoadMore}>Load more</button>}

    </S.ContainerStyled>
  );
}
