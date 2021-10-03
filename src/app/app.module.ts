import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { StateService } from './services/state.service';
import { TableComponent } from './table/table.component';
import { PlayerComponent } from './player/player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionsComponent } from './actions/actions.component';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';
import { YourCardsComponent } from './your-cards/your-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TableComponent,
    PlayerComponent,
    ActionsComponent,
    CardsComponent,
    YourCardsComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [ApiService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
