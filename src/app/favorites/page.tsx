import { NextPage } from 'next';

import Favorites from '@/components/favorites/favorites';

export const metadata = {
  title: 'Favorites | E-commerce',
  description: 'My E-commerce app',
};

const FavoritesPage: NextPage = () => {
  return <Favorites />;
};

export default FavoritesPage;
