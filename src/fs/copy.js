import {cp} from 'fs/promises';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import path from 'path';


const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToCopiedObj = path.join(__dirname, 'files');
const pathToCopyObj = pathToCopiedObj + '_copy';

const copy = async () => {
    try {
        await cp(pathToCopiedObj, pathToCopyObj, {
            recursive: true,
            force: false,
            errorOnExist: true,
        })
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await copy();


