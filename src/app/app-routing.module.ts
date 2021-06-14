import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: 'calcolatrice',
  component: CalculatorComponent
},
{
  path: 'users',
  component: UsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
