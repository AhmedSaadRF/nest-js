import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const res = await this.paymentsRepository.save(createPaymentDto);
    return res;
  }

  findAll() {
    const payments = this.paymentsRepository.find();
    return payments;
    // return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const existingPayment = await this.paymentsRepository.findOneBy({ id: id });

    if (!existingPayment) {
      throw new Error(`Payment with ID ${id} not found`);
    }

    // Update the payment properties
    existingPayment.currency = updatePaymentDto.currency;
    if (updatePaymentDto.amount !== undefined) {
      existingPayment.amount = updatePaymentDto.amount;
    }

    const updatedPayment = await this.paymentsRepository.save(existingPayment);
    return updatedPayment;
    // return `This action updates a #${id} payment`;
  }

  async remove(id: number) {
    const deletedPayment = await this.paymentsRepository.delete(id);
    return deletedPayment;
    // return `This action removes a #${id} payment`;
  }
}
