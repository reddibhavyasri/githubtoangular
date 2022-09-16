import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Asnmnt4Component } from './asnmnt4/asnmnt4.component';
import { Asnmnt5Component } from './asnmnt5/asnmnt5.component';
import { Asnmnt6Component } from './asnmnt6/asnmnt6.component';
import { Asnmnt7Component } from './asnmnt7/asnmnt7.component';
import { Asnmnt9Component } from './asnmnt9/asnmnt9.component';
import { Asnmnt1Component } from './asnmnt1/asnmnt1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Asnmnt8Component } from'./asnmnt8/asnmnt8.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp2Component,
    Asnmnt4Component,
    Asnmnt5Component,
    Asnmnt6Component,
    Asnmnt7Component,
    Asnmnt9Component,
    Asnmnt1Component,
    ParentComponent,
    ChildComponent,
    Asnmnt8Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
