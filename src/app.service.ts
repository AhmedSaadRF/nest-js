import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sayWelcome(): string {
    return 'Welcome to ';
  }

  sayWelcomeToUser(name: string): string {
    return 'Welcome to ' + name + '!';
  }
}
