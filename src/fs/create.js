import {writeFile} from 'fs/promises';
import { fileURLToPath } from 'url';
import {dirname} from 'path';
import path from 'path';


const __dirname=dirname(fileURLToPath(import.meta.url));
const pathToCopyFile=path.join(__dirname, 'files','fresh.txt')


const create = async () => {
    try {
       await writeFile(pathToCopyFile,'I am fresh and young',{flag:'wx'})
    }catch(err){
        throw new Error ('FS operation failed')
    }
};

await create();