import { Provincia } from "../models/Provincia";

export class Localidad {
    id: number;
    nombre: string;
    provincia_id: number;
    
    provincia: Provincia;

    constructor() { 
        this.provincia = new Provincia();
    }
}