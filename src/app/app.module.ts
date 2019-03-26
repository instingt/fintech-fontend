import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project/project.component';
import {TaskService} from './task.service';
import { TaskComponent } from './task/task.component';
import { FormatUserPipe } from './format-user.pipe';
import { ScaleDirective } from './scale.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TaskComponent,
    FormatUserPipe,
    ScaleDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProjectService,
    TaskService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
