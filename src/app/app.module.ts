import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CatalogComponent } from './catalog/catalog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ViewItemComponent } from './view-item/view-item.component';
import { DelItemComponent } from './del-item/del-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { CategoryPipe } from './category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    MainComponent,
    AboutComponent,
    ContactsComponent,
    CatalogComponent,
    ViewItemComponent,
    DelItemComponent,
    EditItemComponent,
    CreateItemComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, NgbModule, NgbCarouselModule, FormsModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
