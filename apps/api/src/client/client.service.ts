import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientDocument, ClientSchema } from './schemas/client.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(ClientSchema.name)
    private clientModel: Model<ClientSchema>,
  ) {}

  async create(dto: CreateClientDto): Promise<Client> {
    const client = new this.clientModel(dto);
    client.id = uuidv4();
    return await client.save();
  }

  async findAll() {
    return await this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    return await this.clientModel.findOne<ClientDocument>({ id }).exec();
  }

  async update(id: string, dto: UpdateClientDto) {
    const res = await this.clientModel
      .findOneAndUpdate<ClientDocument>({ id: id }, dto)
      .exec();
    if (!res) throw new NotFoundException();
    return await this.findOne(id);
  }

  async remove(id: string) {
    const res = await this.clientModel
      .findOneAndDelete<ClientDocument>({ id })
      .exec();
    if (!res) throw new NotFoundException();
    return res;
  }
}
