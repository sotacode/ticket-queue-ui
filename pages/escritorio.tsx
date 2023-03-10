import DashboardEscritorio from '@/components/DashboardEscritorio';
import NavbarLayout from '@/components/Navbar';
import { Layout } from '@/components/layout/Navbar/Layout';
import authMiddleware from '@/middleware/authMiddleware';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

const Escritorio = () => {

  

  return (
    <>
      <Head>
        <title>Escritorio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
      <Layout>
        <NavbarLayout>
          <DashboardEscritorio />
        </NavbarLayout>
      </Layout>
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = authMiddleware(async () => {
  // Devuelva los props necesarios para su página
  return {
    props: {
      // ...
    },
  };
});



export default Escritorio;