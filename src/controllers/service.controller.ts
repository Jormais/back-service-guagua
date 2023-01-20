//import { NextFunction, Request, Response } from 'express';
const fs = require('fs');
const pdf = require('pdf-parse');
 

class ServiceController {
    gerService() {
        
        let dataBuffer = fs.readFileSync('../pdf/chivata_2429.pdf');
        pdf(dataBuffer).then(function(data) {
            // number of pages
            console.log(data.numpages);
            // number of rendered pages
            console.log(data.numrender);
         // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata); 
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version);
            // PDF text
            console.log(data.text); 
        
});
    }
}

export = new ServiceController();