import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "../components/dashboard/dashboard.component";
import { EmplyeeAddComponent } from "../components/dashboard/emplyee-add/emplyee-add.component";

const routes: Routes = [
    {
        path:'',
        component:AdminDashboardComponent,
        children:[
            {path:'EmployeeAdd',component:EmplyeeAddComponent}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule { }