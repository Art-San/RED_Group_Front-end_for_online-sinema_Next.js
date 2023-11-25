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

// import dynamic from 'next/dynamic'
// import { FC } from 'react'

// // import FavoriteMovie from './FavoriteMovie/FavoriteMovie'
// import PopularMovie from './PopularMovie'

// const DynamicFavoriteMovie = dynamic(
// 	() => import('./FavoriteMovie/FavoriteMovie'),
// 	{
// 		ssr: false,
// 	}
// )

// const MoviesContainer: FC = () => {
// 	return (
// 		<div>
// 			<PopularMovie />
// 			<DynamicFavoriteMovie />
// 		</div>
// 	)
// }
// export default MoviesContainer
