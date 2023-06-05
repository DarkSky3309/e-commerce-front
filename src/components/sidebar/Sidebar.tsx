'use client';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CategoryService } from '@/services/category.service';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { FiLogOut } from 'react-icons/fi';
import { useActions } from '@/hooks/useActions';

const Sidebar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data } = useQuery(
    ['get categories'],
    () => CategoryService.getCategories(),
    {
      select: ({ data }) => data,
    },
  );
  const { logout } = useActions();
  const { user } = useAuth();
  const pathname = usePathname();
  useEffect(() => {
    setIsLoaded(true);
  }, [data]);

  const logoutHandler = () => {
    logout();
    window.location.reload();
  };

  return (
    <aside className={'fixed w-1/5 mt-20 h-aside bg-secondaryColor flex flex-col justify-between'}>
      {(isLoaded) &&
        <>
          <div>
            <div className={'text-xl text-white mt-4 mb-6 ml-6'}>
              Categories:
            </div>
            <ul className={'text-white'}>
              {data?.map((category) => (
                <li key={category.id}>
                  <Link href={`/category/${category.slug}`}
                        className={`block text-lg my-3 px-10 hover:text-themeColor
                     transition-colors duration-200 
                     ${pathname === `/category/${category.slug}` ? 'text-themeColor' : 'text-white'}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
          {!!user && (
            <button onClick={() => logoutHandler()} className={'text-white flex items-center mx-auto mb-4'}>
              <FiLogOut size={20} className={'mr-2'} />
              <span>Logout</span>
            </button>
          )}
        </>}
    </aside>
  );
};

export default Sidebar;