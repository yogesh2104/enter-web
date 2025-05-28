
import Marquee from '@/components/Marquee';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <Marquee/>
    </>
  );
};

export default Layout;
