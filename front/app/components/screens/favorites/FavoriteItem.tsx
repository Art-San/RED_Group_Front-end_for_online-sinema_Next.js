import Image from "next/legacy/image"
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/configs/url.config'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'

// 7:04
const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
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

// import Image from 'next/image'
// import Link from 'next/link'
// import { FC } from 'react'

// import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

// import styles from './Favorites.module.scss'
// import { IFavoriteItem } from './favorites.interface'

// const FavoriteItem: FC<{ item: IFavoriteItem }> = ({ item }) => {
// 	return (
// 		<div className={styles.itemWrapper}>
// 			<FavoriteButton movieId={item._id} />
// 			<Link href={item.link}>
// 				<a className={styles.item}>
// 					<Image
// 						alt={item.name}
// 						src={item.posterPath}
// 						layout="fill"
// 						draggable={false}
// 						priority
// 					/>

// 					<div className={styles.title}>{item.title}</div>
// 				</a>
// 			</Link>
// 		</div>
// 	)
// }

// export default FavoriteItem
