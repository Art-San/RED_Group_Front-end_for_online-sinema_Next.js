import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre/genre.service'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getPopularGenres
	)

	return queryData
}
