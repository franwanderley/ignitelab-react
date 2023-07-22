import { Suspense, lazy } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useParams } from 'react-router-dom';

const Video = lazy(() => import('../components/Video'));

export function Event () {
  const { slug } = useParams();

  const FallbackLoading = () => (
    <div className="flex-1 flex items-center justify-center">
      <p>Carregando...</p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
      <Suspense fallback={<FallbackLoading />}>
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
      </Suspense>
      <Sidebar />
      </main>
    </div>
  );
}