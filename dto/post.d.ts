import { Author } from './author';

export interface IPost {
  id: string;
  author: Author;
  title: string;
  description: string;
  image: string;
  slug: string;
}
