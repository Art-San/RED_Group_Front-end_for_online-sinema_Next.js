import { Head, Html, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
	return (
		<Html lang="en">
			{/* <Head /> */}
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
					rel="stylesheet" // У меня и без этого работает
				/>
				{/* <Link rel="manifest" href="/manifest.json" /> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
