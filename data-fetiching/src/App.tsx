import axios from 'axios';
import { useQuery } from 'react-query';

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get(
      'https://api.github.com/users/stecks10/repos'
    );

    return response.data;
  });

  return (
    <ul>
      {isFetching && <p>carregando</p>}
      {data?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
