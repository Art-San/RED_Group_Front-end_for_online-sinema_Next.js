// import { FC } from 'react'
// import FavoriteMovie from './FavoriteMovie/FavoriteMovie'
// import PopularMovie from './PopularMovie'
// const MoviesContainer: FC = () => {
// 	return (
// 		<div>
// 			<PopularMovie />
//      <FavoriteMovie />
// 			{/*  Error: Hydration failed because the initial UI does not match what was rendered on the server. */}
// 			{/*Warning: Expected server HTML to contain a matching <span> in <div>.*/}
// 			{/* See more info here: https://nextjs.org/docs/messages/react-hydration-error */}
// 		</div>
// 	)
// }
// export default MoviesContainer
import dynamic from 'next/dynamic'
import { FC } from 'react'

// import FavoriteMovie from './FavoriteMovie/FavoriteMovie'
import PopularMovie from './PopularMovie'

const DynamicFavoriteMovie = dynamic(
	// использовали dynamic чтоб решить проблемы выше
	() => import('./FavoriteMovie/FavoriteMovie'),
	{
		ssr: false,
	}
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovie />
			<DynamicFavoriteMovie />
		</div>
	)
}
export default MoviesContainer
