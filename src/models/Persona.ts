import { Localidad } from "./Localidad";
import { TipoDocumento } from "./TipoDocumento";

export class Persona {
    id: number;
    numero_documento: number;
    apellido: string;
    nombre: string;
    fecha_nacimiento: Date;
    tipo_documento_id: number;
    localidad_id: number;
    
    tipo_documento: TipoDocumento;
    localidad: Localidad;

    constructor() { 
        this.localidad = new Localidad();
    }
}

  