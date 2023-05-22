import React from 'react';
import { NextPage } from 'next';
import HomeComponent from '@/components/home/Home';

export const metadata = {
  title: 'Home | E-commerce',
  description: 'My E-commerce app',
}


const Home: NextPage = () => {
  return (
    <div>
      <HomeComponent></HomeComponent>
    </div>
  );
};

export default Home;