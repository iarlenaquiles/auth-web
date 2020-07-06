import styled from 'styled-components';
import { darken } from 'polished';

export const Actions = styled.div`
      display: flex;
      flex-direction: row;
      align-self: center;
      align-items: center;
      align-content: center;

      button.cancelar {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        margin: 5px 0 0;
        margin-left: 10px;
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

      button.view {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        margin: 5px 0 0;
        margin-left: 10px;
        height: 44px;
        padding: 5px;
        background: #008000;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#008000')};
        }
      }

      button.editar {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        justify-content: center;
        margin: 5px 0 0;
        height: 44px;
        padding: 5px;
        background: #4dbaf9;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#4DBAF9')};
        }
      }


    svg {
      align-self: flex-start;
      margin-right: 5px;
      margin-top: 5px;
      align-items: center;
      justify-content: center;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }

`;

export const ContainerStyled = styled.div`
  padding: 16px 32px;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;

export const TitleStyled = styled.h2`
  color: #FFE81F;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
`;

export const PaginationCounterStyled = styled.p`
  color: #FFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const ListStyled = styled.div`
  width: 100%;
  margin: 16px 0;
  grid-area: list;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;
