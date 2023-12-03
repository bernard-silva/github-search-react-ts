import styled from 'styled-components';

export const BackButton = styled.div`
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
  }
`;

export const UserInfo = styled.section`
  margin-top: 50px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  align-items: center;

  header {
    display: flex;
    align-items: center;  

    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
    }

    .wrapper {
      margin-left: 1px;
      display: flex;
      flex-direction: column;

      .wrapper-2 {
        display: flex;
        flex-direction: column;
        margin: auto 16px;

        strong {
          font-size: 28px;
          color: #3d3d4d;
        }

        p {
          font-size: 18px;
          color: #737380;
          margin-top: 4px;
        }
      }

      .wrapper-3 {
        margin: auto 3px;
        display: flex;
        gap: 1px;

        p {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto 13px;
          font-size: 14px;
          color: #737380;
          margin-top: 4px;
        }
      }
    }
  }
`;

export const RepositoryList = styled.div`
/* margin: 20px auto; */
  margin-top: 20px;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardRepo = styled.a`
  background: #fff;
  padding: 10px;
  border-radius: 5px;

  text-decoration: none;
  color: #3d3d4d;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  strong {
    font-size: 20px;
  }
`;
