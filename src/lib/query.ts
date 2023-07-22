import { gql } from "@apollo/client";

export const GET_LESSON_BY_SLUG = gql`
query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}
`;

export const GET_LESSON_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`;