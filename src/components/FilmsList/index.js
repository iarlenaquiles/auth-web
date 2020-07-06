import React, { useState, useEffect } from 'react';
import swapi from '../../services/swapi';

import * as S from './styles';
import FilmCard from '../FilmCard';

export default function FilmsList({ onClickDetails }) {
  const [films, setFilms] = useState([]);
  const [count, setCount] = useState(0);
  const [hasNext, setHasNext] = useState('');
  const [page, setPage] = useState(1);

  const initFilms = async () => {

    const response = await swapi.get(`films/?page=${page}`);

    setFilms([...films, ...response.data.results]);
    setCount(response.data.count);
    setHasNext(response.data.next);
  };

  useEffect(() => {
    initFilms();
  }, []);

  function handleLoadMore() {
    setPage(page+1);
    initFilms();
  }

  return (
    <S.ContainerStyled>
      <div className="row">
        <S.TitleStyled>Films</S.TitleStyled>
        <S.PaginationCounterStyled>
          Mostrando {films.length} de <b>{count}</b>
        </S.PaginationCounterStyled>
      </div>
      <S.ListStyled>
        {films.map(char => (
            <FilmCard
              key={char.id}
              film={char}
            />
          ))}
      </S.ListStyled>
      {!!hasNext && <button onClick={handleLoadMore}>Load more</button>}

    </S.ContainerStyled>
  );
}
