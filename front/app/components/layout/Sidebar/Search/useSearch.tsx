import { useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie/movie.service'

export const useSearch = () => {
	const { searchTerm, setSearchTerm } = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data: popularMovies } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch, // Отрабатывает в том случае если человек, что-то вводит
		}
	)
	// 16:34
}
