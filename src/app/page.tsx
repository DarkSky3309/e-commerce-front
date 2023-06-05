import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import HomeComponent from '@/components/home/Home';
import { IProduct, TypePaginationProducts } from '@/types/product.interface';
import { ProductService } from '@/services/product/product.service';

export const metadata = {
  title: 'Home | E-commerce',
  description: 'My E-commerce app',
};


const Home: NextPage = () => {

  return (
    <div className={'min-h-screen'}>
      <HomeComponent></HomeComponent>
    </div>
  );
};

export default Home;


