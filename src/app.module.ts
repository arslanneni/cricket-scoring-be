import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'almari123',
      database: 'cricket',
      autoLoadEntities: true,
      synchronize: false,
    }),
  
  ],
})
export class AppModule {}