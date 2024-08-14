import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<Order>,
  ) {}

  async create(dto: CreateOrderDto): Promise<Order> {
    const order = new this.orderModel(dto);
    order.totalValue = order.product.amount * order.product.salePrice;
    await order.save();
    return order;
  }

  async findAll() {
    return await this.orderModel.find().exec();
  }

  async findById(id: string) {
    return await this.orderModel.findById(id).exec();
  }

  async update(id: string, dto: UpdateOrderDto) {
    await this.orderModel.findByIdAndUpdate(id, dto);
    return this.findById(id);
  }

  async remove(id: string) {
    return await this.orderModel.findByIdAndDelete(id);
  }
}
