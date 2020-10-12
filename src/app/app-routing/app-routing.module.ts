import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from '../notfound/notfound.component';
import {MainComponent} from '../main/main.component';
import {AboutComponent} from '../about/about.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {CreateItemComponent} from '../create-item/create-item.component';
import {ViewItemComponent} from '../view-item/view-item.component';
import {DelItemComponent} from '../del-item/del-item.component';
import {EditItemComponent} from '../edit-item/edit-item.component';



const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/create', component: CreateItemComponent},
  {path: 'catalog/view/:id', component: ViewItemComponent},
  {path: 'catalog/delete/:id', component: DelItemComponent},
  {path: 'catalog/edit/:id', component: EditItemComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
