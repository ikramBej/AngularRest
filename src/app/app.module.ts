import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
// Forms module
import { FormsModule } from '@angular/forms';
// Components
import { CheckListComponent } from './check-list/check-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'check-list', component: CheckListComponent }
];


@NgModule({
exports: [RouterModule],
declarations: [
AppComponent,
CheckListComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule,
RouterModule.forRoot(routes)
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {}
