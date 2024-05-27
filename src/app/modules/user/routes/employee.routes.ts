import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "../components/dashboard/dashboard.component";
import { EmployeeHomeComponent } from "../components/dashboard/employee-home/employee-home.component";

const routes: Routes = [
    {
        path:'',
        component:UserDashboardComponent,
        children:[
            {
                path:'',
                component:EmployeeHomeComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule { }