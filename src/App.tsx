import { gql, useQuery } from "@apollo/client"

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface LessonQuery {
  id: string;
  title: string;
}


function App() {
  const { data } = useQuery<{lessons: LessonQuery[]}>(GET_LESSON_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
