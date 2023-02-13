import Image from 'next/image';
import Link from 'next/link';
import { IPost } from '../dto/post';

interface Props {
  post: IPost;
}

function Post({ post }: Props) {
  return (
    <div>
      <Link key={post.id} href={`/post/${post.slug}`}>
        <div
          className="border rounded-lg group cursor-pointer 
            overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            width="0"
            height="0"
            sizes="100vw"
            className="h-60 w-full object-cover group-hover:scale-105
                  transition-transform duration-200"
          ></Image>
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg font-bold">{post.title}</p>
              <p className="text-xs">
                {post.description}
                <span className="text-green-600">
                  {' '}
                  by <span className="text-purple-600">{post.author.name}</span>
                </span>
              </p>
            </div>
            <Image
              src={post.author.image}
              alt={post.author.name}
              width="0"
              height="0"
              sizes="100vw"
              className="h-12 w-12 rounded-full"
            ></Image>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Post;
