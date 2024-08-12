import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema, ClientSchemaFactory } from './schemas/client.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClientSchema.name, schema: ClientSchemaFactory },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
