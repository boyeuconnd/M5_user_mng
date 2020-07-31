import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserComponent } from './user/user.component';
import { InputSearchComponent } from './core/input-search/input-search.component';
import { GroupMngComponent } from './core/group-mng/group-mng.component';
import { AppRoutingModule} from './app-routing.module';
import { UserAddComponent } from './user/add/user-add/user-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './user/edit/edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
// import { PaginationControlsComponent } from './core/pagination-controls/pagination-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    InputSearchComponent,
    GroupMngComponent,
    UserAddComponent,
    EditComponent,
    // PaginationControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
