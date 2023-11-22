import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'

import Error404 from '../404'

interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	return actor ? (
		<Catalog movies={movies || []} title={actor.name} />
	) : (
		<Error404 />
	)
}

// https://nextjs.org/docs/messages/invalid-getstaticpaths-value
export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((a) => ({
			params: { slug: a.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: { movies, actor },
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default ActorPage
// ====== Это вариант с конечного файла-------
// // import { errorCatch } from 'api/api.helpers'
// import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

// import Actor from '@/screens/actor/Actor'
// import { IActorPage } from '@/screens/actor/actor.types'

// import { ActorService } from '@/services/actor/actor.service'
// import { MovieService } from '@/services/movie/movie.service'

// import Error404 from '../404'

// const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
// 	return actor ? <Actor actor={actor} movies={movies} /> : <Error404 />
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	try {
// 		const { data: actors } = await ActorService.getAll()
// 		const paths = actors.map((g) => ({
// 			params: { slug: g.slug },
// 		}))

// 		return {
// 			paths,
// 			fallback: 'blocking',
// 		}
// 	} catch (e) {
// 		// console.log(errorCatch(e))

// 		return {
// 			paths: [],
// 			fallback: false,
// 		}
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	try {
// 		const { data: actor } = await ActorService.getBySlug(String(params?.slug))

// 		const { data: movies } = await MovieService.getByActors([actor._id])

// 		return {
// 			props: { movies, actor },
// 		}
// 	} catch (e) {
// 		// console.log(errorCatch(e))

// 		return {
// 			props: {},
// 			// notFound: true,
// 		}
// 	}
// }

// export default ActorPage

// import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

// import Actor from '@/screens/actor/Actor'

// import { IActorPage } from '@/components/screens/actor/actor.types'

// import { ActorService } from '@/services/actor/actor.service'
// import { MovieService } from '@/services/movie/movie.service'

// import Error404 from '../404'

// const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
// 	return actor ? <Actor actor={actor} movies={movies} /> : <Error404 />
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	try {
// 		const { data: actors } = await ActorService.getAll()
// 		const paths = actors.map((g) => ({
// 			params: { slug: g.slug },
// 		}))

// 		return {
// 			paths,
// 			fallback: 'blocking',
// 		}
// 	} catch (e) {
// 		// console.log(errorCatch(e))

// 		return {
// 			paths: [],
// 			fallback: false,
// 		}
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	try {
// 		const { data: actor } = await ActorService.getBySlug(String(params?.slug))

// 		const { data: movies } = await MovieService.getByActor(actor._id)

// 		return {
// 			props: { movies, actor },
// 		}
// 	} catch (e) {
// 		// console.log(errorCatch(e))

// 		return {
// 			props: {},
// 			// notFound: true,
// 		}
// 	}
// }

// export default ActorPage
