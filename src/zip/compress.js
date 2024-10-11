import {createGzip} from 'zlib';
import {pipeline} from 'stream/promises';
import {
    createReadStream,
    createWriteStream,
} from 'fs';

import {getPath} from "../utils/get-path.js";


const readStream = createReadStream(getPath(import.meta.url, 'files', 'fileToCompress.txt'));
const writeStream = createWriteStream(getPath(import.meta.url, 'files', 'archive.gz'));

const compress = async () => {
    await pipeline(readStream, createGzip(), writeStream);
    // await readStream.pipe(createGzip()).pipe(writeStream)
    console.log('completed successfully');
};

await compress();





