import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./user";


@Module({
  imports: [TypeOrmModule.forRoot(
      {
          type: 'mysql',
          host: '127.0.0.1',
          port: 3306,
          username: 'Tempov',
          password: '222333',
          database: 'base_npp',
          entities: [User],
          synchronize: true,
      }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
