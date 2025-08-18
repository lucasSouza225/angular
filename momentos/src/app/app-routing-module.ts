import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/pages/about/about';
import { Home } from './components/pages/home/home';
import { NewMoment } from './components/pages/new-moment/new-moment';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'moments/new', component: NewMoment}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
