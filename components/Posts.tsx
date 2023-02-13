import { IPost } from '../dto/post';
import Post from './Post';

interface Props {
  posts: [IPost];
}

function Posts({ posts }: Props) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-3 md:gap-6 p-2 md:p-6"
    >
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}

export default Posts;
