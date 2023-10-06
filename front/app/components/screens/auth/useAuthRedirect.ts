import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

// 05:40

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter() // push для переадресации

	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}
