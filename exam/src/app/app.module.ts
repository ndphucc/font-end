import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { DanhSachBenhAnComponent } from './danh-sach-benh-an/danh-sach-benh-an.component';
import { SuaBenhAnComponent } from './sua-benh-an/sua-benh-an.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhSachBenhAnComponent,
    SuaBenhAnComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
