import { Controller, Get, Injectable, Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

@Injectable()
class AppService {
    generateMessage() {
        return 'Hello World'
    }
}

@Controller()
class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/')
    showHello() {
        return this.appService.generateMessage()
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
