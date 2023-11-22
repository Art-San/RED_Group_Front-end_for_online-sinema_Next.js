import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Trending movies"
			description="Trending movies in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const movies = await MovieService.getMostPopularMovies()

		return {
			props: { movies },
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default TrendingPage

// ====== Это вариант с конечного файла-------
// import { GetStaticProps, NextPage } from 'next'
// import { QueryClient, dehydrate, useQuery } from 'react-query'

// import Catalog from '@/components/ui/catalog-movies/Catalog'

// import { MovieService } from '@/services/movie/movie.service'

// const TrendingPage: NextPage = () => {
// 	const { data: popularMovies } = useQuery('Popular movies', () =>
// 		MovieService.getMostPopularMovies()
// 	)

// 	return (
// 		<Catalog
// 			movies={popularMovies || []}
// 			title="Trending movies"
// 			description="Trending movies in excellent quality: legal, safe, without ads"
// 		/>
// 	)
// }

// export const getStaticProps: GetStaticProps = async () => {
// 	const queryClient = new QueryClient()

// 	await queryClient.prefetchQuery('Popular movies', () =>
// 		MovieService.getMostPopularMovies()
// 	)

// 	return {
// 		props: {
// 			dehydratedState: dehydrate(queryClient),
// 		},
// 	}
// }

// export default TrendingPage
