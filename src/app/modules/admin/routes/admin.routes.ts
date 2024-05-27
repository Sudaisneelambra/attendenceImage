import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "../components/dashboard/dashboard.component";
import { EmplyeeAddComponent } from "../components/dashboard/emplyee-add/emplyee-add.component";
import { EmployeeHomeComponent } from "src/app/components/employee-home/employee-home.component";
import { EmployeeListComponent } from "../components/dashboard/employee-list/employee-list.component";

const routes: Routes = [
    {
        path:'',
        component:AdminDashboardComponent,
        children:[
            {path:'',component:EmployeeHomeComponent},
            {path:'EmployeeAdd',component:EmplyeeAddComponent},
            {path:'all-Employees',component:EmployeeListComponent},

        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule { }