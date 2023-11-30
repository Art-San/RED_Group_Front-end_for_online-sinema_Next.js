import Image from 'next/legacy/image'
import Link from 'next/link'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/configs/url.config'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'

// const DynamicFavoriteButton = dynamic(
// 	// использовали dynamic чтоб решить проблемы выше.
// 	() => import('../single-movie/FavoriteButton/FavoriteButton'),
// 	{
// 		ssr: false,
// 	}
// )

// 7:04
const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.itemWrapper}>
			{/* {user && <DynamicFavoriteButton movieId={movie._id} />} */}
			{user && <FavoriteButton movieId={movie._id} />}
			<Link legacyBehavior href={getMovieUrl(movie.slug)}>
				<a className={styles.item}>
					<Image
						alt={movie.title}
						src={movie.bigPoster}
						layout="fill"
						draggable={false}
						priority
					/>

					<div className={styles.title}>{movie.title}</div>
				</a>
			</Link>
		</div>
	)
}

export default FavoriteItem
