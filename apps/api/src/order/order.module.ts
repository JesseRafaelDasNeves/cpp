import { Module, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';
import { OrderSchema } from './schemas/order.schema';
import { APP_PIPE } from '@nestjs/core';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports: [
    ClientModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    },
  ],
})
export class OrderModule {}
