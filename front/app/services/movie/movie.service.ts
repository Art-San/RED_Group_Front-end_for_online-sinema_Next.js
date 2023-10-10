import { axiosClassic } from 'api/interceptors'
import axios from 'api/interceptors'

import { IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/configs/api.config'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getMostPopularMovies() {
		// Не отдавать data а то будет data.data лучше вот так data: movies
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl(`/most-popular`)
		)

		return movies
	},

	async delete(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
}
