import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { FileSchema } from './scheema/file.schema';

@Module({
  imports: [MongooseModule.forFeature(
                [{name:'File', schema:FileSchema}])
           ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
