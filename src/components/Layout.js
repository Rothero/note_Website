import Head from'next/head';
import {Navbar} from './Navbar';

 export const Layout=({children})=> {
  return (
    <>
      <Head>
        <title>Note App</title>
      </Head>
      <Navbar/>
      {children}
    </>
  )
};


