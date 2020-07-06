import styled from 'styled-components';
import { darken } from 'polished';

import background from '../../assets/background.jpg';

export const Container = styled.div`


  background-image: url(${background});
  width: 100%;
  height: 2000px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }

    button {
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      align-items: center;
      margin: 5px 0 0;
      height: 44px;
      padding: 5px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
    }

    svg {
      margin-top: 5px;
      align-self: flex-start;
      margin-right: 5px;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin-top: 10px;
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

