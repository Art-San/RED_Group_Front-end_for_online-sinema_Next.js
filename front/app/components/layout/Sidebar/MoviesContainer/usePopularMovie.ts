import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie/movie.service'

export const usePopularMovie = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Popular movies in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3), // ограничили количество фильмов 11:30
		}
	)

	return { isLoading, popularMovies }
}
