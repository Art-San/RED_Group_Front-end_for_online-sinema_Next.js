import { NextPage } from 'next'

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean } // 8:42

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }
