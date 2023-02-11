import { isNumberObject } from "util/types";

import { NextFunction, Request, Response } from 'express';
const fs = require('fs');
const pdf = require('pdf-parse');
 

class CuadrantesController {
    getSabado(){}
    getDomingo(req: Request, res: Response){

        let dataBuffer = fs.readFileSync('../pdf/cuadrantes/cuadrante_domingo-12.pdf');
        let service  = '';
        pdf(dataBuffer).then(async function(data) {
            /* // number of pages
            console.log(data.numpages);
            // number of rendered pages
            console.log(data.numrender);
         // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata); 
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version); */
            // PDF text
            let CP = req.query.CP;
            let dataRows = data.text.split('\n');
            dataRows.forEach((row : string) => {
                if( row.endsWith(`${CP}`)){
                    console.log('****'); //expresion regular para ver numero 
                    console.log(row);
                    console.log('****'); //expresion regular para ver numero 
                    service = row;
                } else {
                    console.log('No se han encontrado datos');
                    
                    if(service === ''){
                        service = 'No se han encontrado datos';
                    }
                }
            });

            if(service !== 'No se han encontrado datos'){
                res.json(service)
            }
});
    }
    getCuadrante(){}
}

export = new CuadrantesController();