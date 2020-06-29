import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CategoriesComponent} from "./pages/categories/categories.component";

const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

