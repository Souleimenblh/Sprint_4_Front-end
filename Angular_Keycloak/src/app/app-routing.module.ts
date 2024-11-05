import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [{ path: 'avions', component: AvionsComponent,canActivate:[AuthGuard], 
  data : {roles:['ADMIN']}} 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
