import { readFile} from 'fs/promises';
import {getPath} from "./utils/get-path.js";


const pathToReadingFile =getPath(import.meta.url,'files','fileToRead.txt');

const read = async () => {
    try {
        const data=await readFile(pathToReadingFile,{ encoding: 'utf8' } )
        console.log(data);
    }catch (err){
        throw new Error('FS operation failed')
    }
};

await read();