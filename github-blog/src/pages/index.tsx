import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { UserCard } from '../components/UserCard';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <UserCard />
    </div>
  );
};

export default Home;
