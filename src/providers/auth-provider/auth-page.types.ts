import { NextPage } from 'next';

export type TypeRoles = {
  isOnlyUser?: boolean;
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles;
export type TypeCompnentAuthFields = {
  Component: TypeRoles;
}