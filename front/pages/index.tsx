import { errorCatch } from 'api/api.helpers'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.types'

import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getMovieUrl } from '@/configs/url.config'

const HomePage: NextPage<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

// рекомендовал GetStaticProps и getStaticPaths
// Не рекомендовал getServerSideProps так как он замедляет скорость загрузки сайта, от каждого user отправляет 1 запрос и получает HTML
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlide[] = movies.slice(0, 4).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			bigPoster: m.bigPoster,
			subTitle: getGenresList(m.genres),
			title: m.title,
		}))

		const { data: dataActors } = await ActorService.getAll()
		// const actors: IGalleryItem[] = dataActors.slice(0, 7).map({}) // 6:08

		// const dataTrendingMovies = await MovieService.getMostPopularMovies()

		return {
			props: {
				slides,
			} as IHome,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			// props: {
			// 	slides: [],
			// } as IHome,
		}
	}
}

export default HomePage
