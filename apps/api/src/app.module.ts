import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigService } from './config/mongoose-config.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
      inject: [MongooseConfigService],
    }),
    ClientModule,
    ProductModule,
    OrderModule,
  ],
})
export class AppModule {}
