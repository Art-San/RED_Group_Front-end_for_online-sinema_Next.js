import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'
import VideoPlayer from '@/components/ui/video-player/VideoPlayer'

import { Meta } from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

import Content from './Content/Content'

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})

const SingleMovie: FC<IMoviePage> = ({ similarMovies, movie }) => {
	return (
		<Meta title={movie?.title} description={`Watch ${movie?.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			{/* Video Player*/}
			<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />
			{/* <VideoPlayer slug={movie.slug} videoSource={movie.videoUrl} /> */}

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			{/* Rating */}
		</Meta>
	)
}

export default SingleMovie

// ====== Это вариант с конечного файла-------
// import dynamic from 'next/dynamic'
// import { FC } from 'react'

// import Banner from '@/ui/banner/Banner'
// import Gallery from '@/ui/gallery/Gallery'
// import { IGalleryItem } from '@/ui/gallery/gallery.types'
// import SubHeading from '@/ui/heading/SubHeading'

// import { IMovie } from '@/shared/types/movie.types'

// import { Meta } from '@/utils/meta'

// import Content from './Content/Content'
// import { useUpdateCountOpened } from './useUpdateCountOpened'

// const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
// 	ssr: false,
// })
// const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
// 	ssr: false,
// })

// const SingleMovie: FC<{ movie: IMovie; similarMovies: IGalleryItem[] }> = ({
// 	movie,
// 	similarMovies,
// }) => {
// 	useUpdateCountOpened(movie.slug)

// 	return (
// 		<Meta title={movie.title} description={`Watch ${movie.title}`}>
// 			<Banner
// 				imagePath={movie.bigPoster}
// 				Detail={() => <Content movie={movie} />}
// 			/>

// 			<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />

// 			<div className="mt-12">
// 				<SubHeading title="Similar" />
// 				<Gallery items={similarMovies} />
// 			</div>

// 			<DynamicRateMovie slug={movie.slug} _id={movie._id} />
// 		</Meta>
// 	)
// }

// export default SingleMovie
