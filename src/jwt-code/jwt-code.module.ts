import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtCodeController } from './jwt-code.controller';
import { JwtCodeService } from './jwt-code.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '3h' },
    }),
  ],
  controllers: [JwtCodeController],
  providers: [JwtCodeService],
})
export class JwtCodeModule {}
