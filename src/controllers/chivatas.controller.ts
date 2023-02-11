import { isNumberObject } from "util/types";

import { NextFunction, Request, Response } from 'express';
const fs = require('fs');
const pdf = require('pdf-parse');
 

class ChivatasController {
    gerService2440(req: Request, res: Response) {
        
        let dataBuffer = fs.readFileSync('../pdf/chivatas/chivata_2440.pdf');
        pdf(dataBuffer).then(function(data) {
            console.log(data);    
        });
    }

    getLunes(){}
    getMartes(){}
    getMiercoles(){}
    getJueves(){}
    getViernes(){}
}

export = new ChivatasController();