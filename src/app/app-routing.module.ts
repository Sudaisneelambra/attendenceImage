import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { gotloginGuard } from './guards/gotlogin.guard';
import { goadminhomeGuard } from './guards/goadminhome.guard';
import { goemployeehomeGuard } from './guards/goemployeehome.guard';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
