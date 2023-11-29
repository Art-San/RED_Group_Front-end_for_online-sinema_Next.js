import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Favorites from '@/screens/favorites/Favorites'

const DynamicFavorites = dynamic(
	// использовали dynamic чтоб решить проблемы выше.
	() => import('@/screens/favorites/Favorites'),
	{
		ssr: false,
	}
)

const FavoritesPage: NextPage = () => {
	return (
		<DynamicFavorites />
		// <Favorites />
	)
}

export default FavoritesPage
