import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { MessageComponent } from './message/message.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    TaskService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }