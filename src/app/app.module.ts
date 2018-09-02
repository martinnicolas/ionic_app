import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PersonaProvider } from '../providers/persona/persona-provider';
import { HttpClientModule } from '@angular/common/http';
import { ShowPage } from '../pages/show/show';
import { FormPage } from '../pages/form/form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ShowPage,
    FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ShowPage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonaProvider
  ]
})
export class AppModule {}
