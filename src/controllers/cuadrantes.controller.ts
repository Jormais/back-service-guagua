import { NextFunction, Request, Response } from 'express';
const fs = require('fs');
const pdf = require('pdf-parse');
 

class CuadrantesController {
    getDiario(req: Request, res: Response){
        
        let dataBuffer = fs.readFileSync('../pdf/cuadrantes/cuadrante_1480.pdf');
        let service  = [''];
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
            let CP : any = req.query.CP;
            let relevoManana = false;
                let relevoTarde = false;
            let dataRows = data.text.split('\n');
            dataRows.forEach((row : string) => {
                let x = row.split(' ');
                
                
                if(x.includes('RELEVO') && x.includes('MAÑANA')){
                    relevoManana = true;
                    relevoTarde = false;
                    console.log('relevo manana ' + relevoManana);
                    console.log('relevo terd ' + relevoTarde);
                    console.log(x);
                    
                    
                } else if (x.includes('RELEVO') && x.includes('TARDE')){
                    relevoManana = false;
                    relevoTarde = true;
                    console.log('relevo manana ' + relevoManana);
                    console.log('relevo terd ' + relevoTarde);
                    console.log(x);
                }
                if(x.includes(CP) || x.includes('-'+CP)){
                    console.log('relevo manana ' + relevoManana);
                    console.log('relevo terd ' + relevoTarde);

                    
                    let turno = '';
                    if(relevoManana){
                        turno='Mañana'
                        console.log('manana');
                        
                    }else if(relevoTarde){
                        turno='tarde';
                        console.log('tarde');
                        
                    }
                    console.log('****');
                    console.log('Estas de relevo con turno de ' + turno);
                    console.log(x);
                    console.log('****');
                    console.log('relevo manana ' + relevoManana);
                    console.log('relevo terd ' + relevoTarde);
                    res.send(x + 'Estas de relevo con turno de ' + turno)
                    //service = x;
                    //console.log(service);
                    
                }

                
                
                /* if( row.endsWith(`${CP}`)){
                    console.log('****'); //expresion regular para ver numero 
                    console.log(row);
                    console.log('****'); //expresion regular para ver numero 
                    service = row;
                } else {
                    console.log('No se han encontrado datos');
                    
                    if(service === ''){
                        service = 'No se han encontrado datos';
                    }
                } */
            });

            console.log(dataRows.length);


});
    }
    getDomingo(req: Request, res: Response){
        let dataBuffer = fs.readFileSync('../pdf/cuadrantes/cuadrante_1483.pdf');
        pdf(dataBuffer).then(function(data) {
            let service = '';
            let CP  :any = req.query.CP;
            let dataRows = data.text.split('\n');
            dataRows.forEach((row : string) => {
                if (row.includes(' '+CP+' ') || row.includes(' '+CP)) { //aqui el cp que esta al final no lo pilla
                    service = row;              //por que no tiene ' ' (espacio) al final
                }
            });
            res.json(service)
        });
    }

    getSabado(req: Request, res: Response){
        res.json('Cuadrante del sabado')
    }
}

export = new CuadrantesController();