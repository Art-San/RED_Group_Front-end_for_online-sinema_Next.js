import { IGenre } from '@/shared/types/movie.types'

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}
// Omit убирает лишнее поле, а именно ID так как оно редактироваться не будет
