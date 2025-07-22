import { Controller, Get, Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

@Controller()
class AppController {
    @Get('/')
    showHello() {
        return 'Hello World'
    }
}

@Module({
    controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
    const port = process.env.PORT ?? 3000
    const app = await NestFactory.create(AppModule)
    await app.listen(port)
    console.log(`Server is running on port ${app.getUrl()}`)
}

bootstrap()
