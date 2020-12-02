import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DiagramsComponent } from './pages/diagrams/diagrams.component';
import { DataStructureComponent } from './pages/data-structure/data-structure.component';



const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'diagrams',
        component: DiagramsComponent
      },
      {
        path: 'data-structure',
        component: DataStructureComponent
      }

    ]},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
