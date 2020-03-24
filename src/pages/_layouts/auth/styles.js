import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #f54c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      background: #3b9eff;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 15px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      font-size: 16px;
      color: #fff;
      margin-top: 15px;
      opacity: 0.8;
      transition: opacity 0.2s;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
