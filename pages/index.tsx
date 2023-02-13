import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Posts from '../components/Posts';
import { IPost } from '../dto/post';

interface Props {
  posts: [IPost];
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Posts posts={posts} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Osman',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      },
      title: 'Demo',
      description: 'Bla bla bla',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png',
      slug: '1',
    },
    {
      id: 2,
      author: {
        name: 'Osman',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      },
      title: 'Demo',
      description: 'Bla bla bla',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Himalayan_North_banner_Lhakpa_La_pass.jpg/800px-Himalayan_North_banner_Lhakpa_La_pass.jpg',
      slug: '2',
    },
    {
      id: 3,
      author: {
        name: 'Osman',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      },
      title: 'Demo',
      description: 'Bla bla bla',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Himalayan_North_banner_Lhakpa_La_pass.jpg/800px-Himalayan_North_banner_Lhakpa_La_pass.jpg',
      slug: '3',
    },
    {
      id: 4,
      author: {
        name: 'Osman',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      },
      title: 'Demo',
      description: 'Bla bla bla',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Himalayan_North_banner_Lhakpa_La_pass.jpg/800px-Himalayan_North_banner_Lhakpa_La_pass.jpg',
      slug: '4',
    },
  ];
  return {
    props: {
      posts,
    },
  };
};
