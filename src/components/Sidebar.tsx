import { useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";
import { GET_LESSON_QUERY } from "../lib/query";


interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    LessonType: 'live' | 'class'
  }[]

}

export function Sidebar () {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSON_QUERY)

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronogramas de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title} 
            type={lesson.LessonType}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  );
}