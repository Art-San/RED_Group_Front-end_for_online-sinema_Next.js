import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Популярные фильмы"
			description="Трендовые фильмы в отличном качестве: легально, безопасно, без рекламы."
		/>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const movies = await MovieService.getMostPopularMovies()

		return {
			props: { movies },
			revalidate: 60, // Пере сборка через 60 сек
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default TrendingPage
