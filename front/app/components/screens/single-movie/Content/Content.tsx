import { FC } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getActorUrl, getGenreUrl } from '@/configs/url.config'

import FavoriteButton from '../FavoriteButton/FavoriteButton'

import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList'

// 15:42
const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie.parameters.year} . </span>
				<span>{movie.parameters.country} . </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.slice(0, 3).map((g) => ({
					_id: g._id,
					link: getGenreUrl(g.slug),
					title: g.name,
				}))}
			/>
			<ContentList
				name="Actors"
				links={movie.actors.slice(0, 3).map((a) => ({
					_id: a._id,
					link: getActorUrl(a.slug),
					title: a.name,
				}))}
			/>

			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>

			{/* Favorite Button*/}

			<FavoriteButton movieId={movie._id} />
		</div>
	)
}

export default Content
// ====== Это вариант с конечного файла-------
// import { FC } from 'react'

// import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

// import { IMovie } from '@/shared/types/movie.types'

// import { getActorUrl, getGenreUrl } from '@/configs/url.config'

// import FavoriteButton from '../FavoriteButton/FavoriteButton'

// import styles from './Content.module.scss'
// import ContentList from './ContentList/ContentList'

// const Content: FC<{ movie: IMovie }> = ({ movie }) => {
// 	return (
// 		<div className={styles.content}>
// 			<h1>{movie.title}</h1>
// 			<FavoriteButton movieId={movie._id} />
// 			<div className={styles.rating}>
// 				<MaterialIcon name="MdStarRate" />
// 				<span>{movie.rating.toFixed(1)}</span>
// 			</div>
// 			<div className={styles.details}>
// 				<span>{movie.parameters.year} · </span>
// 				<span>{movie.parameters.country} · </span>
// 				<span>{movie.parameters.duration} min.</span>
// 			</div>
// 			<ContentList
// 				name="Genres"
// 				links={movie.genres.map((g) => ({
// 					link: getGenreUrl(g.slug),
// 					title: g.name,
// 					_id: g._id,
// 				}))}
// 			/>
// 			<ContentList
// 				name="Actors"
// 				links={movie.actors.map((a) => ({
// 					link: getActorUrl(a.slug),
// 					title: a.name,
// 					_id: a._id,
// 				}))}
// 			/>
// 		</div>
// 	)
// }

// export default Content
