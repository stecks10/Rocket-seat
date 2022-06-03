import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';
export function App() {
  return (
    <>
      <Header />
      <div>
        <Post
          author="Vitor Nunes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias pariatur ducimus animi aliquam at laboriosam quidem et quo consequuntur, illum maiores, distinctio tempora exercitationem quis ad ipsum temporibus voluptate nulla."
        />
        <Post author="User" content="Novopost" />
      </div>
    </>
  );
}
