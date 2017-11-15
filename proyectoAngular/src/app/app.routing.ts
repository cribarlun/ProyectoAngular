import {Routes, RouterModule} from '@angular/router';
import {DataBindingComponent} from './Components/data-binding/data-binding.component';
import {DirectivesComponent} from './Components/directives/directives.component';
import {PipesComponent} from './Components/pipes/pipes.component';
import {FormsComponent} from './Components/forms/forms.component';
import {ReactiveFormsComponent} from './Components/reactive-forms/reactive-forms.component';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';



export const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/data-binding'}, //para poner una página principal. siempre tiene que ir el primero en el array
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'data-binding/:variable', component: DataBindingComponent},// si quieres añadir información en la  url
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'forms', component: FormsComponent},
  {path: '**', component: PageNotFoundComponent} // pageNotFound tiene que ser siempre el ultimo del array
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);