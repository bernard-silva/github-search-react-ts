import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError?: boolean;
}

export const Logo = styled.img`
  width: 38px;
  height: 35px; 
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-top: 40px;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 700px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 20px;
  flex: 1;
  display: flex;

  input {
    height: 50px;
    width: 100%;
    padding-left: 1rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    padding: 0 1rem;
    height: 50px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Users = styled.div`
  margin-top: 50px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #8c8c8c;
`;

export const UserCard = styled.div`
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + div {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
`;
