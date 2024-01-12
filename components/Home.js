import React from 'react';
import Header from './header';
import NavBar from './NavBar';
import Footer from './Footer';// Make sure the case matches the filename

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}
