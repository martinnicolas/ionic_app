import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Persona } from '../../models/Persona';
import { PersonaProvider } from '../../providers/persona/persona-provider';
import { TipoDocumento } from '../../models/TipoDocumento';
import { Provincia } from '../../models/Provincia';
import { Localidad } from '../../models/Localidad';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  selectedItem: any;
  persona: Persona;
  provincias: Provincia[];
  tipos_documento: TipoDocumento[];
  localidades: Localidad[];
  titulo: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public personaService: PersonaProvider
  ) {
    this.selectedItem = navParams.get('item');
    this.getTiposDocumento();
    this.getProvincias();    
    if (this.selectedItem) {
      this.persona = this.selectedItem;
      this.titulo =  'Editar persona';
      this.getLocalidades(this.persona.localidad.provincia.id);
    } else {
      this.persona = new Persona();
      this.persona.localidad = new Localidad();
      this.titulo =  'Nueva persona';      
      this.getLocalidades(Provincia.CHUBUT);
    }    
  }

  guardar(): void {
    if (!this.persona.id) {
      this.nuevaPersona();
    }else {
      this.modificarPersona();
    }    
  }

  nuevaPersona() {
    this.personaService.createPersona(this.persona)
    .subscribe(data => {
      this.persona = data;
      this.navCtrl.pop();
    });      
  }

  modificarPersona() {
    this.personaService.updatePersona(this.persona)
    .subscribe(data => {
      this.persona = data;
      this.navCtrl.pop();
    });      
  }

  changeProvincia(provincia_id: number) {
    this.getLocalidades(provincia_id);
  }

  getTiposDocumento() {
    this.personaService.getTiposDocumento()
      .subscribe(
        tipos_documento => this.tipos_documento = tipos_documento
      );
  }

  getProvincias() {
    this.personaService.getProvincias()
      .subscribe(
        provincias => this.provincias = provincias
      );
  }

  getLocalidades(provincia_id: number) {
    this.personaService.getLocalidades(provincia_id)
      .subscribe(
        localidades => this.localidades = localidades
      );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

}
