import {unlink} from 'fs/promises';
import {getPath} from "../utils/get-path.js";


const path = getPath(import.meta.url, 'files', "fileToRemove.txt");

const remove = async () => {
    try {
        await unlink(path);
    } catch (err) {
        throw new Error('FS operation failed');
    }

};

await remove();