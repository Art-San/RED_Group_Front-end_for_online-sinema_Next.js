// rootReducer.ts это корневой редюсер в котором будут другие
// import { reducer as toastrReducer } from 'react-redux-toastr'  // переназначили имя
import { reducer as toastrReducer } from 'react-redux-toastr'

export const reducers = {
	toastr: toastrReducer,
}
