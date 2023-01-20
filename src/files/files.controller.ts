import {
  BadRequestException,
  Body,
  Post,
  Controller,
  UseInterceptors,
} from "@nestjs/common";
import { fileDTO } from "./dto/fileDTO.dto";
import { FilterQueryDto } from "./dto/filterQuery.dto";
import { FilesService } from "./files.service";
import { Get, Param, Res, UploadedFile } from "@nestjs/common/decorators";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage, Multer } from "multer";
import { Response } from "express";
import { Query } from "@nestjs/common/decorators";

@Controller("files")
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @Post("upload")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const name = file.originalname.split(".")[0];
          const fileExtension = file.originalname.split(".")[1];
          const newFileName =
            name.split(" ").join("_") + "_" + Date.now() + "." + fileExtension;

          cb(null, newFileName);
        },
      }),
    })
  )
  uploadFile(
    @Body() filedto: fileDTO,
    @UploadedFile("file") file: Express.Multer.File
  ) {
    if (!file) {
      throw new BadRequestException("File is not appropriate");
    } else {
      const filePathURL = `http://localhost:3000/files/viewFile/${file.filename}`;
      console.log(filePathURL);
      this.fileService.UploadOnDb(filedto, filePathURL);
    }
  }

  @Get("viewFile/:filename")
  async viewTheFile(
    @Param("filename") filename,
    @Res() res: Response
  ): Promise<void> {
    res.sendFile(filename, { root: "./uploads" });
  }

  @Get()
  getFile(@Query() filterQueryDto: FilterQueryDto) {
    if (Object.keys(filterQueryDto).length) {
      console.log("got elese");

      return this.fileService.getFilteredFile(filterQueryDto);
    } else {
      return this.fileService.getFiles();
    }
  }
}
