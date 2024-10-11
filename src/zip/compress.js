import {createGzip} from 'zlib';
import {pipeline} from 'stream';
import {promisify} from 'util';
import {
    createReadStream,
    createWriteStream,
} from 'fs';

import {getPath} from "../utils/get-path.js";


const patToSource=createReadStream(getPath(import.meta.url, 'files', 'fileToCompress.txt'));
const patToDestination=createWriteStream(getPath(import.meta.url, 'files', 'archive.gz'));

const compress = async () => {
    try {
        const gzip = createGzip();
        const pipe = promisify(pipeline);
        await pipe(patToSource, gzip, patToDestination);
    }catch (err){
        throw err;
    }

};

await compress();





