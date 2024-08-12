import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto, CreateClientSchema } from './dto/create-client.dto';
import { UpdateClientDto, UpdateClientSchema } from './dto/update-client.dto';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateClientSchema))
  async create(@Body() dto: CreateClientDto) {
    return await this.clientService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.clientService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateClientSchema)) dto: UpdateClientDto,
  ) {
    return await this.clientService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.clientService.remove(id);
  }
}
