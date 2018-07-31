import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from '../../../node_modules/ionic-angular/umd';

@NgModule ({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
})

export class HomeModule {
}
