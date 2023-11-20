import { errorCatch } from 'api/api.helpers'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

import { IHome } from '@/components/screens/home/home.interface'
import { ISlide } from '@/components/ui/slider/slider.types'

import { MovieService } from '@/services/movie/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getMovieUrl } from '@/configs/url.config'

const HomePage: NextPage<IHome> = ({ slides }) => {
	return <Home slides={slides} />
}

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

		return {
			props: {
				slides,
			} as IHome,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
			} as IHome,
		}
	}
}

export default HomePage

// import type { NextPage } from 'next'

// import Home from '@/components/screens/home/Home'

// const HomePage: NextPage = () => {
// 	return <Home />
// }

// export default HomePage
