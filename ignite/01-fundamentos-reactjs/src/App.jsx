import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/stecks10.png',
      name: 'Vitor Nunes',
      role: 'Dev Junior',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-05-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/fnsdeividy.png',
      name: 'Sobrinho',
      role: 'Dev Junior',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare #novoprojeto #nlw #rocketseat ',
      },
    ],
    publishedAt: new Date('2022-06-10 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Miltonvilarino.png',
      name: 'Neto Careca',
      role: 'Dev Pleno',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é BOMPRACRAKE 🚀',
      },
      {
        type: 'link',
        content: 'BOM.CRAKE/BOMPRACRAKE #BOMPRACRAKE  ',
      },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
