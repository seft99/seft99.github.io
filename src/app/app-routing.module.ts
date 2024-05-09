import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SPAComponent } from './pages/components/spa/spa.component';

const routes: Routes = [
{
  path: '',
  redirectTo:'',
  pathMatch:'full'

},
{
path:'',
component:SPAComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
