import { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Catalog from '@/components/catalog/Catalog';
import Favorites from '@/components/favorites/favorites';

export const metadata = {
  title: 'Favorites | E-commerce',
  description: 'My E-commerce app',
};


const FavoritesPage: NextPage = () => {
  return <Layout>
    <Favorites/>
  </Layout>;
};

export default FavoritesPage;