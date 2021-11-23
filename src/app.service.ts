import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNumbers(): number {
    const a = 90;
    const b = 3.14;
    const c = a + b;
    return c;
  }
  getString(): string{
    const name = 'myName';
    const lastName = 'MyLastName';
    const fullName = name + '' +lastName;
    return fullName;
  }
  getArrays(): number[] {
    const list: number[] = [5,6,7];
    return list;
  }
  getMultitypeArrays() {
    const sList: (string|number)[] = [1,"green"]
    return sList;
  }

}
