import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(dto);
    await createdProduct.save();
    return createdProduct;
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findById(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.productModel.findByIdAndUpdate(id, dto);
    return this.findById(id);
  }

  async remove(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
