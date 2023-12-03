import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../services/api';

import { FiChevronLeft } from 'react-icons/fi';
import { IoBookSharp } from "react-icons/io5";
import { FaUsers, FaUserTag } from "react-icons/fa";

import { CardRepo, BackButton, RepositoryList, UserInfo } from './styles';

import { Repository } from '../../models/repository'
import { User } from '../../models/user';
import { Datetime } from "../../utils/datetime";
import { Compact } from "../../utils/compact";

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
      <BackButton>
        <div onClick={ () => navigate(-1) }>
          <FiChevronLeft size={18} />
          Voltar
        </div>
      </BackButton>

      {state.user.id && (
        <UserInfo>
          <header>
            <img
              src={state.user.avatar_url}
              alt={state.user.login}
            />
            <div className="wrapper">
              <div className="wrapper-2">
                <strong>{state.user.name}</strong>
                <p>{state.user.login}</p>
                <p>{state.user.location}</p>
              </div>
              <div className="wrapper-3">
                <p><FaUsers /> {Compact(state.user.followers)}</p>
                <p><IoBookSharp /> {Compact(state.user.public_repos)}</p>
                <p><FaUserTag /> {state.user.id}</p>
              </div>
            </div>
          </header>
        </UserInfo>
      )}

      <RepositoryList>
        {
          repositories.length > 0 
            && repositories.map(repository => (
              <CardRepo key={repository.id} href={repository.html_url} target='_blank'>
                <strong>{repository.name}</strong>
                <p>Linguagem: {repository.language}</p>
                <p>Descrição: {repository.description}</p>
                <p>Data de Criação: {Datetime(repository.created_at)}</p>
                <p>Data de Publicação: {Datetime(repository.pushed_at)}</p>
              </CardRepo>) 
            )  
        }
      </RepositoryList>
      
    </>
  );
};

export default Repositories;

