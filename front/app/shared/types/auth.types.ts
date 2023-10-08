import { NextPage } from 'next'

//Описываем типы, что бы работала такая штука HomePage.isOnlyAdmin = true

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean } // 8:42

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles // Свой кастомный тип NextPageAuth вместо NextPage

export type TypeComponentAuthFields = {
	children: React.ReactNode
	Component: TypeRoles
} // это для нашего провайдера
// так в оригинале
// export type TypeComponentAuthFields = { Component: TypeRoles } // это для нашего провайдера
