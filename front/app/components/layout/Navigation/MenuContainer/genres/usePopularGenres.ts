// import { useQuery } from 'react-query'
// import { GenreService } from '@/services/genre/genre.service'
// import { getGenreUrl } from '@/configs/url.config'
// import { IMenuItem } from '../menu.interface'
// export const usePopularGenres = () => {
// 	const queryData = useQuery(
// 		'popular genre menu',
// 		() => GenreService.getPopularGenres(),
// 		{
// 			select: (
// 				{ data } // select Позволяет выбрать те данные что нам нужны и отдать (трансформирует данные что получили)
// 			) =>
// 				data
// 					.map(
// 						(genre) =>
// 							({
// 								icon: genre.icon,
// 								link: getGenreUrl(genre.slug),
// 								title: genre.name,
// 							}) as IMenuItem
// 					)
// 					.splice(0, 4),
// 		}
// 	)
// 	return queryData
// }
import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre/genre.service'

import { getGenreUrl } from '@/configs/url.config'

import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4),
			onError(error) {},
		}
	)

	return queryData
}
