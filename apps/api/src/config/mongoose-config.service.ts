import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('MONGO_URI'),
      user: this.configService.get<string>('MONGO_USER'),
      pass: this.configService.get<string>('MONGO_PASS'),
      authSource: this.configService.get<string>('MONGO_AUTH_SOURCE'),
    };
  }
}
