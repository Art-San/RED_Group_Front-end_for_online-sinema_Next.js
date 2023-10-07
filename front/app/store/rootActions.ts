import * as userActions from './user/user.actions'

// в файле ./user/user.actions Несколько export с помощью звёздочки записали в переменную userActions

export const allActions = {
	...userActions,
}
