//import { handler } from '../../frontend/build/handler.js';
import express from 'express';

const cwd = process.cwd();
async function main(){
    const {handler} = await import("file://" + cwd + "/frontend/build/handler.js");
    const app = express();

    // add a route that lives separately from the SvelteKit app
    app.get('/healthcheck', (req, res) => {
        res.end('ok');
    });
    
    // let SvelteKit handle everything else, including serving prerendered pages and static assets
    app.use(handler);
    
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on port 3000');
    });
}

main();
