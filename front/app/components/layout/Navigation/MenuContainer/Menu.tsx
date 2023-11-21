import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

// была такая ошибка - Error: Text content does not match server-rendered HTML. Ошибка: текстовое содержимое не соответствует HTML, отображаемому сервером. Исправлено с помощью DynamicAuthItems
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
