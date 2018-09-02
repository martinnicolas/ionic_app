import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FormPage } from '../form/form';
import { Persona } from '../../models/Persona';
import { PersonaProvider } from '../../providers/persona/persona-provider';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  selectedItem: any;
  persona: Persona;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public personaService: PersonaProvider
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = this.navParams.get('item');
  }

  openMenu() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Acciones sobre esta persona',
      buttons: [
        {
          text: 'Editar',
          icon: 'create',
          handler: () => {
            console.log('click Editar');
            this.navCtrl.push(FormPage, {
              item: this.selectedItem
            });
          }
        },{
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('click Eliminar');
            this.showConfirm(this.selectedItem);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('click Cancelar');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showConfirm(persona: Persona) {
    const confirm = this.alertCtrl.create({
      title: 'Atención',
      message: 'Desea eliminar esta persona?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('click Cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('click Aceptar');
            this.eliminarPersona(persona);
          }
        }
      ]
    });
    confirm.present();
  }

  eliminarPersona(persona: Persona): void {
    this.personaService.deletePersona(persona).
      subscribe(data => {
        this.navCtrl.pop();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }

  ionViewDidEnter() {
    this.selectedItem = this.navParams.get('item');
  }

}
