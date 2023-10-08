import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return <div className=" text-white text-4xl">AdminPage</div>
}

AdminPage.isOnlyAdmin = true

export default AdminPage
