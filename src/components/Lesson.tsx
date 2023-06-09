import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson (props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  return (
    <Link to={`/lesson/${props.slug}`} className="group">
      <span className="text-gray-300 ">
        {format(props.availableAt, "EEE' • 'd' de 'MMM' • 'k'h'mm", {
          locale: ptBR
          })}
      </span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">

        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
              <span className="text-sm text-blue-500 font-medium flex flex-items-center gap-2">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex flex-items-center gap-2">
              <Lock size={20} />
              em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-grey-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </Link>
  );
}