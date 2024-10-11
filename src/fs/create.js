import {writeFile} from 'fs/promises';
import {getPath} from '../utils/get-path.js';


const path = getPath(import.meta.url, 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(path, 'I am fresh and young', {flag: 'wx'})
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await create();