import { NextFunction, Request, Response } from 'express';
const fs = require('fs');
const pdf = require('pdf-parse');
 

class HorarioController {
    gerService(req: Request, res: Response) {
        
        let dataBuffer = fs.readFileSync('../pdf/libro-de-horarios/horarios-v2.pdf');
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
            let CP = req.query.CP;
            let dataRows = data.text.split('\n');
            /* dataRows.forEach((row : string) => {
                if(row.includes(` ${590} ` ,0)){
                    console.log('****'); //expresion regular para ver numero 
                    console.log(row);
                    console.log('****'); //expresion regular para ver numero 
                    res.status(200).send(row);
                }
            }); */
            console.log(data.text); 
        
});
    }
}

export = new HorarioController();