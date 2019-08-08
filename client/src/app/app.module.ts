import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, } from '@angular/material/dialog';
import {MatPaginatorModule, MatFormFieldModule,  MatInputModule, MatButtonModule, MatToolbarModule, MatAutocompleteModule } from '@angular/material';
import { DocenteComponent } from './docente/docente.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { GetComponent } from './servicios/get/get.component';
import { PostComponent } from './servicios/post/post.component';
import { DeleteComponent } from './servicios/delete/delete.component';
import { PutComponent } from './servicios/put/put.component';

@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    GetComponent,
    PostComponent,
    DeleteComponent,
    PutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
