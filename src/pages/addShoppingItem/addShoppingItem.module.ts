import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { AddShoppingItemPage } from './addShoppingItem';

@NgModule({
  declarations: [
    AddShoppingItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShoppingItemPage),
  ],
})
export class AddShoppingItemPageModule {}
