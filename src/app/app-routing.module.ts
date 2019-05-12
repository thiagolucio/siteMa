import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuemSomosContentComponent } from './quem-somos/quem-somos-content/quem-somos-content.component';
import { HomeComponent } from './home/home.component';
import { TopmenuComponent } from './topmenu/topmenu.component';



const routes: Routes = [
  { path: '', component: HomeComponent },   
  { path: 'top', component: TopmenuComponent },   
  { path: 'contentquemsomos', component: QuemSomosContentComponent },  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
