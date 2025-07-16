/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.sayWelcome();
  }

  @Post('/query')
  queryHello(@Query() query: any) {
    return query.name;
  }

  @Post('/path/:name')
  pathparam(@Param('name') params: any) {
    return params;
  }

  @Post('/body')
  bodyparam(@Body('age') age: number) {
    return age;
  }

  @Post('/params')
  params(@Body('name') name: string, @Req() req: any, @Res() res: any) {
    res.send(this.appService.sayWelcomeToUser(name));
    // return this.appService.sayWelcomeToUser(name);
  }
}