import type { NextPage } from 'next';
import Head from 'next/head';
import Contents from '../components/pages/project';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Project</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.png' />
    </Head>
    <Contents />
  </>
);

export default Home;
