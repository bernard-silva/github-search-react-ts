import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: #555;
    transition: color 0.2s;

    &:hover {
      color: #222;
      cursor: default;
    }

    svg {
      margin-right: 1px;
    }
  }
`;

export const UserInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 30px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 24px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const CardRepo = styled.a`
  background: #fff;
  display: flex;
  text-decoration: none;
  color: #000;
`;

export const RepositoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
