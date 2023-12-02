import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import { CardRepo, Header, RepositoryList, UserInfo } from './styles';

import { Repository } from '../../models/repository'
import { User } from '../../models/user';

interface UseLocation {
  state: {user: User},
}

const Repositories: React.FC = () => {
  const navigate = useNavigate()
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const { state } = useLocation() as UseLocation

  useEffect(() => {
    api.get(`users/${state.user.login}/repos`).then((response) => {
      setRepositories(response.data);
    });
  }, [state.user.login]);

  return (
    <>
      <Header>
        <div onClick={ () => navigate(-1) }>
          <FiChevronLeft size={18} />
          Voltar
        </div>
      </Header>

      {state.user.id && (
        <UserInfo>
          <header>
            <img
              src={state.user.avatar_url}
              alt={state.user.login}
            />
            <div>
              <strong>{state.user.name}</strong>
              <span>{state.user.login}</span>
              <span>{state.user.location}</span>
              <span>{state.user.id}</span>
              <span>{state.user.followers}</span>
              <span>{state.user.public_repos}</span>
            </div>
          </header>
        </UserInfo>
      )}

      <RepositoryList>
        {
          repositories.length > 0 
            && repositories.map(repository => (
              <CardRepo key={repository.id} href={repository.html_url} target='_blank'>
                <span>{repository.name}</span>
                <span>{repository.language}</span>
                <span>{repository.description}</span>
                <span>{repository.created_at}</span>
                <span>{repository.pushed_at}</span>
              </CardRepo>) 
            )  
        }
      </RepositoryList>
      
    </>
  );
};

export default Repositories;
