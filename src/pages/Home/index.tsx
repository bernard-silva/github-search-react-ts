import { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/logo.png';

import { Title, Form, Error, UserCard, Users, Container, Logo } from './styles';

import { User } from '../../models/user'

const Home: React.FC = () => {

  const navigate = useNavigate()
  
  const [username, setUserName] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem(
      '@GithubExplorer:users',
    );

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:users',
      JSON.stringify(users),
    );
  }, [users]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!username) {
      setInputError('Digite o nome do usuário...');
      return;
    }

    try {
      const response = await api.get<User>(`users/${username}`);

      const repository = response.data;

      setUsers([...users, repository]);
      setUserName('');
      setInputError('');
    } catch (err) {
      setInputError('Usuário inválido! Digite o nome do usuário corretamente.');
    }
  }

  return (
    <Container>
      <Logo src={logo} alt="Logo do GitHub"/>
      <Title>Busque repositórios no GitHub</Title>
      <Form 
      hasError={!!inputError} 
      onSubmit={(e) => handleAddRepository(e)}>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Digite o nome do usuário..."
          type="text"
        />
        <button type="submit"><FaSearch/></button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Users>
        <h3>Pesquisas recentes</h3>
        {users.map((user) => (
          <UserCard
            key={user.id}
            onClick={
              () => navigate(`/${user.login}/repositories`, 
              {state:{ user }})
            }
          >
            <img
              src={user.avatar_url}
              alt={user.login}
            />
            <div>
              <strong>{user.name}</strong>
              <p>{user.login}</p>
              <p>{user.location}</p>
            </div>

            <FiChevronRight size={20} />
          </UserCard>
        ))}
      </Users>
    </Container>
  );
};

export default Home;

