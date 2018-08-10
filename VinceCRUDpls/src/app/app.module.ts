import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RecordUpdatingComponent } from './record-updating/record-updating.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    RecordUpdatingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "product", component: ProductComponent},
      {path: "recordUpdating/:id", component: RecordUpdatingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
