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
