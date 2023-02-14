import { IPost } from '../dto/post';
import Thumbnail from './Thumbnail';

interface Props {
  posts: [IPost];
}

function Thumbnails({ posts }: Props) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-3 md:gap-6 p-2 md:p-6"
    >
      {posts.map((post) => (
        <Thumbnail key={post.id} post={post}></Thumbnail>
      ))}
    </div>
  );
}

export default Thumbnails;
