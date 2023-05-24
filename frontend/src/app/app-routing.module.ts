import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoTestComponent } from './components/compo-test/compo-test.component';

const routes: Routes = [
  {
    path: "test",
    component: CompoTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
