// import { FC } from 'react'
// import styles from './Menu.module.scss'
// import MenuItem from './MenuItem'
// import AuthItems from './auth/AuthItems'
// import { IMenu } from './menu.interface'
// const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
// 	return (
// 		<div className={styles.menu}>
// 			<div className={styles.heading}>{title}</div>
// 			<ul className={styles.ul}>
// 				{items.map((item) => (
// 					<MenuItem item={item} key={item.link} />
// 				))}
// 				{title === 'General' ? <AuthItems /> : null}
// 			</ul>
// 		</div>
// 	)
// }
// export default Menu
// =====    Исправили ошибки, но у меня и без исправлений ошибок не было === 25. getStaticProps и фикс багов
import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	// исправление
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
