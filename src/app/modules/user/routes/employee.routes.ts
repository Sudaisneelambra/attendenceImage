import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "../components/dashboard/dashboard.component";
import { EmployeeHomeComponent } from "../../../components/employee-home/employee-home.component";
import { LeaveApplicationComponent } from "../components/dashboard/leave-application/leave-application.component";
import { AttendenceCallenderComponent } from "src/app/components/attendence-callender/attendence-callender.component";
import { AttendenceComponent } from "../components/dashboard/attendence/attendence.component";

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
            },
            {
                path:'attendanceCalander',
                component:AttendenceCallenderComponent
            },
            {
                path:'attendance',
                component:AttendenceComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule { }