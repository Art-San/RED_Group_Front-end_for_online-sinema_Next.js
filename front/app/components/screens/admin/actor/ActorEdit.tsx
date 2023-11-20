import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import formStyles from '@/components/shared/admin/adminForm.module.scss'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
// import TextEditor from '@/components/ui/form-elements/TextEditor'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import Heading from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'

import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IActorEditInput>({
		mode: 'onChange', // Показывать при изменении любого поля
	})
	const { isLoading, onSubmit } = useActorEdit(setValue)
	return (
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
							/>
							<SlugField
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
								register={register}
								error={errors.slug}
							/>
							<Controller
								name="photo"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										placeholder="Photo"
										error={error}
										folder="actors"
										image={value}
										onChange={onChange}
									/>
								)}
								rules={{
									required: 'Photo is required!',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}
export default ActorEdit

// import { FC } from 'react'
// import { Controller, useForm } from 'react-hook-form'

// import formStyles from '@/components/shared/admin/adminForm.module.scss'
// import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
// import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
// import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

// import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
// import Button from '@/ui/form-elements/Button'
// import Field from '@/ui/form-elements/Field'
// import Heading from '@/ui/heading/Heading'

// import { Meta } from '@/utils/meta/Meta'
// import generateSlug from '@/utils/string/generateSlug'

// import { IActorEditInput } from './actor-edit.interface'
// import { useActorEdit } from './useActorEdit'

// const ActorEdit: FC = () => {
// 	const {
// 		handleSubmit,
// 		register,
// 		formState: { errors },
// 		setValue,
// 		getValues,
// 		control,
// 	} = useForm<IActorEditInput>({
// 		mode: 'onChange',
// 	})

// 	const { isLoading, onSubmit } = useActorEdit(setValue)

// 	return (
// 		<Meta title="Edit actor">
// 			<AdminNavigation />
// 			<Heading title="Edit actor" />
// 			{isLoading ? (
// 				<SkeletonLoader count={3} />
// 			) : (
// 				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
// 					<div className={formStyles.fields}>
// 						<Field
// 							{...register('name', {
// 								required: 'Name is required!',
// 							})}
// 							placeholder="Name"
// 							error={errors.name}
// 						/>
// 						<SlugField
// 							generate={() => setValue('slug', generateSlug(getValues('name')))}
// 							register={register}
// 							error={errors.slug}
// 						/>
// 						<Controller
// 							name="photo"
// 							control={control}
// 							defaultValue=""
// 							render={({
// 								field: { value, onChange },
// 								fieldState: { error },
// 							}) => (
// 								<UploadField
// 									placeholder="Photo"
// 									error={error}
// 									folder="actors"
// 									image={value}
// 									onChange={onChange}
// 								/>
// 							)}
// 							rules={{
// 								required: 'Photo is required!',
// 							}}
// 						/>
// 					</div>

// 					<Button>Update</Button>
// 				</form>
// 			)}
// 		</Meta>
// 	)
// }

// export default ActorEdit
