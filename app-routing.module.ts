import { formatCurrency } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { FormComponent } from './form/form.component';

const routes: Routes = [
 { path: 'myform:_id', component: FormComponent}
  
];

@NgModule({
/*   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] */
})
export class AppRoutingModule { }
