import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NavbarComponent} from '../app/component/layout/navbar/navbar.component'
import { MaterialModule } from './shared/material/material.module';
import { SchoolsComponent } from './component/schools/schools.component';
import { HttpClientModule } from '@angular/common/http';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    NgxFontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NgwWowModule,
    MatSnackBarModule,
    MatPaginatorModule,
    PaginationModule.forRoot(),
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
