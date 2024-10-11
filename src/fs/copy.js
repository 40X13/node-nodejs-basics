import {cp} from 'fs/promises';
import {getPath} from "../utils/get-path.js";


const pathToCopiedObj = getPath(import.meta.url, 'files');
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


