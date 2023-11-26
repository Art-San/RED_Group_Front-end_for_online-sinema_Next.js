import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.enableCors() // важно прописать перед build, иначе запросы не будут отправляться идет со стороннего url
	await app.listen(3001)
}
bootstrap()
