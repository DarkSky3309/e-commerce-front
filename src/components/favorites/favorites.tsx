import React from 'react';
import { useProfile } from '@/hooks/useProfile';
import Catalog from '@/components/catalog/Catalog';

const Favorites = () => {
  const { profile } = useProfile();
  return (
    <>
      <Catalog title={'Favorites'} products={profile?.favorits || []}></Catalog>
    </>
  );
};

export default Favorites;