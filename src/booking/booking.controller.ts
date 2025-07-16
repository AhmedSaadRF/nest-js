/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('/reservation')
  getBooking(): string {
    return this.bookingService.getBooking();
  }
}
