'use client';
import React from 'react';
import { useProfile } from '@/hooks/useProfile';
import Catalog from '@/components/catalog/Catalog';
import Layout from '@/components/layout/Layout';

const Favorites = () => {
  const { profile } = useProfile();
  return (
    <Layout>
      <Catalog title={'Favorites'} products={profile?.favorits || []}></Catalog>
    </Layout>
  );
};

export default Favorites;