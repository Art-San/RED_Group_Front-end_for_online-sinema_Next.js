import { FC } from 'react'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()
	return <div>GenreMenu</div>
}
export default GenreMenu
