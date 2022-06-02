import { Post } from './Post';
export function App() {
  return (
    <div>
      <Post
        author="Vitor Nunes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias pariatur ducimus animi aliquam at laboriosam quidem et quo consequuntur, illum maiores, distinctio tempora exercitationem quis ad ipsum temporibus voluptate nulla."
      />
      <Post author="User" content="Novopost" />
    </div>
  );
}
