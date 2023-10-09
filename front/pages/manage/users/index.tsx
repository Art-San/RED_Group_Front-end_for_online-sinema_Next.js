import UserList from '@/screens/admin/users/UserList'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserListPage: NextPageAuth = () => {
	// return <div className="">UserList </div>
	return <UserList />
}

UserListPage.isOnlyAdmin = true

export default UserListPage
