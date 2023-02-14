import { GetStaticProps } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import { posts } from '../../dto/data';
import { IPost } from '../../dto/post';

interface Props {
  post: IPost;
}

function Post({ post }: Props) {
  return (
    <main>
      <Header />
      <Image
        className="w-full h-40 object-cover"
        alt={post.title}
        src={post.image}
        width="0"
        height="0"
        sizes="100vw"
      ></Image>

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500 mb-2">
          {post.description}
        </h2>

        <div className="flex items-center space-x-2">
          <Image
            className="h-10 w-10 rounded-full"
            alt={post.author.name}
            src={post.author.image}
            width="0"
            height="0"
            sizes="100vw"
          ></Image>
          <p className="font-extralight text-sm">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date().toLocaleDateString()}
          </p>
        </div>
      </article>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const paths = posts.map((post: IPost) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((element) => element.slug == params?.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 300, //sec: 300 = 5 min
  };
};
