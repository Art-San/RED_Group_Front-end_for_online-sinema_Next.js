import { GenreModel } from './genre.model'
import { HttpException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { CreateGenreDto } from './dto/create-genre.dto'
import { MovieService } from 'src/movie/movie.service'
import { ICollection } from './genre.interface'

@Injectable()
export class GenreService {
	constructor(
		@InjectModel(GenreModel) private readonly genreModel: ModelType<GenreModel>,
		private readonly movieService: MovieService
	) {}

	async bySlug(slug: string) {
		const doc = await this.genreModel.findOne({ slug }).exec() // DOC - универсальное обозначение
		if (!doc) {
			throw new NotFoundException('По слагу Genre не найден')
		}
		return doc
	}

	async getAll(searchTerm?: string) {
		let options = {}

		if (searchTerm) {
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'), // i значит независимо от регистра
					},
					{
						slug: new RegExp(searchTerm, 'i'), // i значит независимо от регистра
					},
					{
						description: new RegExp(searchTerm, 'i'), // i значит независимо от регистра
					},
				],
			}
		}
		return this.genreModel
			.find(options)
			.select('-updatedAt -__v') // Эти поля не получаем
			.sort({ createdAt: 'desc' }) // сначало новые
			.exec()
	}
	//FIXME: ОШИБКА Cannot read properties of undefined (reading 'bigPoster')
	// async getCollections() {
	// 	const genres = await this.getAll()

	// 	const collections = await Promise.all(
	// 		genres.map(async (genre) => {
	// 			const moviesByGenre = await this.movieService.byGenres([genre._id])

	// 			const result: ICollection = {
	// 				_id: String(genre._id),
	// 				image: moviesByGenre[0].bigPoster,
	// 				slug: genre.slug,
	// 				title: genre.name,
	// 			}

	// 			return result
	// 		})
	// 	)

	// 	// return collections
	// 	throw new HttpException('ошибка здесь', 200)
	// }

	async getCollections(): Promise<ICollection[]> {
		const genres = await this.getAll()

		const collections = await Promise.all(
			genres.map(async (genre) => {
				const moviesByGenre = await this.movieService.byGenres([genre._id])

				const result: ICollection = {
					_id: String(genre._id),
					title: genre.name,
					slug: genre.slug,
					image: moviesByGenre[0].bigPoster,
				}

				return result
			})
		)

		return collections
	}

	/*Admin place*/

	async byId(_id: string) {
		const genre = await this.genreModel.findById(_id)
		if (!genre) {
			throw new NotFoundException('Жанр не найден')
		}
		return genre
	}

	async create() {
		const defaultValue: CreateGenreDto = {
			name: '',
			slug: '',
			description: '',
			icon: '',
		}
		const genre = await this.genreModel.create(defaultValue)
		return genre._id
	}

	async update(_id: string, dto: CreateGenreDto) {
		const updateDoc = await this.genreModel
			.findByIdAndUpdate(_id, dto, {
				new: true, // означает что будем отдавать измененный genre
			})
			.exec()

		if (!updateDoc) throw new NotFoundException('Жанр не найден')

		return updateDoc
	}

	async delete(id: string) {
		// const deleteDoc = this.genreModel.findByIdAndDelete(id).exec()
		const deleteDoc = await this.genreModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Жанр не найден')

		return deleteDoc
	}
}
