import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "../components/dashboard/dashboard.component";
import { EmployeeHomeComponent } from "../../../components/employee-home/employee-home.component";
import { LeaveApplicationComponent } from "../components/dashboard/leave-application/leave-application.component";

const routes: Routes = [
    {
        path:'',
        component:UserDashboardComponent,
        children:[
            {
                path:'',
                component:EmployeeHomeComponent
            },
            {
                path:'leave-Application',
                component:LeaveApplicationComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule { }