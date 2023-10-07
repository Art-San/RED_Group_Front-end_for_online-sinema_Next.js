import { useTypedSelector } from './useTypedSelector'

export const useAuth = () => useTypedSelector((state) => state.user)

// export const useAuth = () => ({
// 	user: null,
// 	isLoading: false,
// })
