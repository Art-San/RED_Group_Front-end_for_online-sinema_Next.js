import { FC } from 'react'

import FavoriteMovie from './FavoriteMovie/FavoriteMovie'
import PopularMovie from './PopularMovie'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovie />
			<FavoriteMovie />
		</div>
	)
}
export default MoviesContainer
