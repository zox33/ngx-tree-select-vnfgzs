import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ExpandMode, NgxTreeSelectModule } from 'ngx-tree-select';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    NgxTreeSelectModule.forRoot({
        idField: 'id',
        textField: 'name',
        expandMode: ExpandMode.Selection
      }) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
