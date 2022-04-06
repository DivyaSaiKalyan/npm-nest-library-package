import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtCodeModule } from './jwt-code/jwt-code.module';

@Module({
  imports: [JwtCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
