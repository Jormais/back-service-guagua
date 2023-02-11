import { isNumberObject } from "util/types";

import { NextFunction, Request, Response } from 'express';
const fs = require('fs');
const pdf = require('pdf-parse');
 

class ChivatasController {


    getLunes(req: Request, res: Response){
        let dataBuffer = fs.readFileSync('../pdf/chivatas/chivata_lunes-13.pdf');
        pdf(dataBuffer).then(function(data) {
            let service = '';
            let CP = req.query.CP;
            let dataRows = data.text.split('\n');
            dataRows.forEach((row : string) => {
                if( row.includes(` ${CP} `)){
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
    getMartes(req: Request, res: Response){
        let dataBuffer = fs.readFileSync('../pdf/chivatas/chivata_martes_14.pdf');
        pdf(dataBuffer).then(function(data) {
            let service = '';
            let CP = req.query.CP;
            let dataRows = data.text.split('\n');
            dataRows.forEach((row : string) => {
                if( row.includes(` ${CP} `)){
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
    getMiercoles(){}
    getJueves(){}
    getViernes(){}
}

export = new ChivatasController();