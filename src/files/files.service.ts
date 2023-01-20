import { Injectable } from '@nestjs/common';
import { File } from './interfaces/file.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { fileDTO } from './dto/fileDTO.dto';
import { FilterQueryDto } from './dto/filterQuery.dto';



@Injectable()
export class FilesService {
    constructor(@InjectModel('File') private fileModel:Model<File>){}
  

    async UploadOnDb(filedto: fileDTO, filePathURL:String): Promise<File> {
        const newFile = new this.fileModel(filedto)
        newFile.filePath = filePathURL

        console.log(newFile)
        return await newFile.save()
    }

    

    getFiles(){

        return this.fileModel.find()
        
    




    }

    getFilteredFile(filterQueryDto:FilterQueryDto){

        let exists = {}

        const {content,departement,year} = filterQueryDto

        if (content){

            Object.assign(exists,{"content":content})
          
        }
        
        if (departement){


            Object.assign(exists,{"departement":departement})
           
        }

        if(year){
            
            Object.assign(exists,{"year":year})
        }




        return this.fileModel.find(exists)
       

}
}
