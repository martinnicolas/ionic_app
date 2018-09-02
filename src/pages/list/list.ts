import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { PersonaProvider } from '../../providers/persona/persona-provider';
import { Persona } from '../../models/Persona';
import { ShowPage } from '../show/show';
import { FormPage } from '../form/form';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  personas: Persona[];
  items: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public personaService: PersonaProvider
  ) {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas().subscribe(personas => this.personas = personas);
  }

  nuevaPersona() {
    this.navCtrl.push(FormPage);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ShowPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  ionViewDidEnter() {
    this.getPersonas();
  }
}
