import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "../components/dashboard/dashboard.component";
import { EmplyeeAddComponent } from "../components/dashboard/emplyee-add/emplyee-add.component";
import { EmployeeHomeComponent } from "src/app/components/employee-home/employee-home.component";
import { EmployeeListComponent } from "../components/dashboard/employee-list/employee-list.component";
import { LeaveRequestsComponent } from "../components/dashboard/leave-requests/leave-requests.component";
import { AttendenceCallenderComponent } from "src/app/components/attendence-callender/attendence-callender.component";
import { EmployeesingleDetailsComponent } from "../components/dashboard/employeesingle-details/employeesingle-details.component";

const routes: Routes = [
    {
        path:'',
        component:AdminDashboardComponent,
        children:[
            {path:'',component:EmployeeHomeComponent},
            {path:'EmployeeAdd',component:EmplyeeAddComponent},
            {path:'all-Employees',component:EmployeeListComponent},
            {path:'all-Leave-Requests',component:LeaveRequestsComponent},
            {path:'admin-attendence',component:AttendenceCallenderComponent},
            {path:'employeeFull-Detail/:id/:name/:number',component:EmployeesingleDetailsComponent},
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule { }