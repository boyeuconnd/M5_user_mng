import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserComponent } from './user/user.component';
import { InputSearchComponent } from './core/input-search/input-search.component';
import { GroupMngComponent } from './core/group-mng/group-mng.component';
import { AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    InputSearchComponent,
    GroupMngComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
