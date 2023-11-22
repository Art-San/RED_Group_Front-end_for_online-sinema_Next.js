import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <div className=" text-white text-4xl">ProfilePage</div>
	// return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
