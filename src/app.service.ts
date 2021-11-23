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

  getAnswer(): Promise<any> {
    let a,b : number;
    a = 10;
    b = 22;
    const res = this.checkNum(a,b);
    return res
  }
  public async checkNum(a:number,b:number):Promise<any>{
    const res = [];
    res[0] = a+b;
    if(res[0] % 2 == 0){
      res[1] = "Парне"
      return res
    }else {
      res[1] = "Непарне"
      return res
    }
  }

}
