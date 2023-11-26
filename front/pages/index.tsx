import { errorCatch } from 'api/api.helpers'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.types'

import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getActorUrl, getMovieUrl } from '@/configs/url.config'

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

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				actors,
				trendingMovies,
				slides,
			} as IHome,
			revalidate: 60, // Пере сборка через 60 сек
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
