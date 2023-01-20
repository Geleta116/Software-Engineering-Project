import * as mongoose from 'mongoose'

export const FileSchema = new mongoose.Schema({
    fileName : String,
    description : String,
    department : String,
    course : String,
    year : Number,
    like : Number,
    filePath : String

})
