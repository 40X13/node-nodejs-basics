import {createGzip} from 'zlib';
import {pipeline} from 'node:stream';
import {promisify} from 'util';
import {
    createReadStream,
    createWriteStream,
} from 'fs';





const compress = async () => {


};

await compress();


const pipe = promisify(pipeline);

async function do_gzip(input, output) {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
}

do_gzip('input.txt', 'input.txt.gz')
    .catch((err) => {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    });