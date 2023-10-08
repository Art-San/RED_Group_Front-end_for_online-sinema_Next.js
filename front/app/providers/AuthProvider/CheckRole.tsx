import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()

	const router = useRouter()

	const Children = () => <>{children}</>

	// if (!isOnlyAdmin && !isOnlyUser) return <Children /> // Удалил во время урока 19:43, эта проверка есть

	if (user?.isAdmin) return <Children /> // админ может открывать любую страницу

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404') // .push можно вернуться назад
		// Если pathname не равен /404 &&-то делаем .replace нет возможности вернуться назад
		return null
		// Это компонент по этому он должен вернуть JSX или NULL
	}

	const isUser = user && !user.isAdmin // есть user И он не является Admin, то это юзер

	if (isUser && isOnlyUser) return <Children />
	else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
