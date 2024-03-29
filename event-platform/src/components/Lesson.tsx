import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface LessonProps {
  slug: string;
  title: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ slug, title, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE ' • ' d ' de ' MMMM ' • ' k'h'mm",
    {
      locale: ptBR,
    }
  );
  return (
    <div
      className={`${
        isLessonAvailable ? 'pointer-events-auto' : 'pointer-events-none'
      } `}
    >
      <Link to={`/event/lesson/${slug}`} className="group">
        <span className="text-gray-300">{availableDateFormatted}</span>
        <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span className="text-xs rounded px-2 py-[0.124rem] text-white border border-green-500  font-bold">
              {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
          </header>
          <strong className="text-gray-200 mt-5 block">{title}</strong>
        </div>
      </Link>
    </div>
  );
}
