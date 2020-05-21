import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnglishComponent } from './english/english.component';


const routes: Routes = [
  { path:'', redirectTo: '/Home', pathMatch: 'full' },
  { path:'Home', component: HomeComponent },
  { path:'others', component: EnglishComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
