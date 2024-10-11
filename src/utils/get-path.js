import {fileURLToPath} from 'url';
import {dirname} from 'path';
import path from 'path';


export const getPath = (url,...arg) => {
    const __dirname = dirname(fileURLToPath(url));
    return path.join(__dirname, ...arg);
}