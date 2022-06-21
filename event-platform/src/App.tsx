import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY =  gql`
  query {
    lessons  {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  return (
    <ul>
      {data?.lessons.map(lessons => {
        return <li key={lessons.id}>{lessons.title}</li>
      })}
    </ul>
  )
}
