import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { gotloginGuard } from './guards/gotlogin.guard';
import { goadminhomeGuard } from './guards/goadminhome.guard';
import { goemployeehomeGuard } from './guards/goemployeehome.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', canActivate:[gotloginGuard], component: LoginComponent },
  {
    path: 'admin',
    canActivate:[goadminhomeGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'employee',
    canActivate:[goemployeehomeGuard],
    loadChildren: () =>
      import('./modules/user/employee.module').then((m) => m.UserModule),
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
