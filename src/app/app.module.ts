// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditDialogComponent } from './components/user-edit-dialog/user-edit-dialog.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule, // Add FormsModule here
    CommonModule ,// Add CommonModule here
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    AppComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }







