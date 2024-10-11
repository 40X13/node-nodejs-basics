import fs from 'fs/promises';
import {getPath} from "../utils/get-path.js";


const pathToWrongName = getPath(import.meta.url, 'files', 'wrongFilename.txt');
const pathToProperName = getPath(import.meta.url, 'files', 'wrongFilename.txt');

const rename = async () => {
    try {
        await fs.rename(pathToWrongName, pathToProperName);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await rename();