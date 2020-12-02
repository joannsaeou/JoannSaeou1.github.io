import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// imports material

import {MatTabsModule} from '@angular/material/tabs';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DiagramsComponent } from './pages/diagrams/diagrams.component';
import { DataStructureComponent } from './pages/data-structure/data-structure.component';
import { FormsModule } from '@angular/forms';
















@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    DiagramsComponent,
    DataStructureComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
