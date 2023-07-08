import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCardComponent } from './item-list/item-card/item-card.component';
import { EditItemModuleComponent } from './edit-item-module/edit-item-module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule} from "@angular/material/dialog";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddItemFormComponent,
    ItemListComponent,
    ItemCardComponent,
    EditItemModuleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[EditItemModuleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
