import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { FilesController } from './files/files.controller';
// import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    FilesModule,
    MongooseModule.forRoot("mongodb+srv://ResourceHub:123@resourcehub.5md9pr4.mongodb.net/?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
