import { useParams } from 'react-router-dom';
import { Error404 } from '../components/Error404';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <Error404 />}
        <Sidebar />
      </main>
    </div>
  );
}
