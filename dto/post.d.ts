import { Author } from './author';

export interface IPost {
  id: number;
  author: Author;
  title: string;
  description: string;
  image: string;
  slug: string;
}
