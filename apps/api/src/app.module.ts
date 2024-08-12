import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27020/cpp', {
      user: 'app_cpp',
      pass: '87!Jws',
      authSource: 'admin',
    }),
    ClientModule,
  ],
})
export class AppModule {}
