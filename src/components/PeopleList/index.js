import React, { useState, useEffect } from 'react';
import swapi from '../../services/swapi';

import * as S from './styles';
import Card from '../Card';

export default function PeopleList({ onClickDetails }) {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);
  const [hasNext, setHasNext] = useState('');
  const [page, setPage] = useState(1);

  const initPeople = async () => {

    const response = await swapi.get(`people/?page=${page}`);

    setPeople([...people, ...response.data.results]);
    setCount(response.data.count);
    setHasNext(response.data.next);
  };

  useEffect(() => {
    initPeople();
  }, []);

  function handleLoadMore() {
    setPage(page+1);
    initPeople();
  }

  return (
    <S.ContainerStyled>
      <div className="row">
        <S.TitleStyled>People</S.TitleStyled>
        <S.PaginationCounterStyled>
          Mostrando {people.length} de <b>{count}</b>
        </S.PaginationCounterStyled>
      </div>
      <S.ListStyled>
        {people.map(char => (
            <Card
              key={char.id}
              character={char}

            />
          ))}
      </S.ListStyled>
      {!!hasNext && <button onClick={handleLoadMore}>Load more</button>}

    </S.ContainerStyled>
  );
}
