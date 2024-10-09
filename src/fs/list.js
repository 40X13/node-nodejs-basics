import {readdir} from 'fs/promises';
import {getPath} from "./utils/get-path.js";


const pathForReadFiles = getPath(import.meta.url, 'files');

const list = async () => {
    try {
         const fileNames= await readdir(pathForReadFiles, {recursive: true});
        console.log(fileNames)
    } catch (err) {
    throw new Error('FS operation failed');
    }
};

await list();