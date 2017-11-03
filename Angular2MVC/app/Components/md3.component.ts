import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Global } from '../Shared/global';
import { UserService } from '../Service/user.service';
import { IDept, IEmp } from '../Model/Dept';

@Component({
    templateUrl: 'app/Components/md3.component.html'
})

export class MD3 {

    userFrm: FormGroup;
    deptId: string = "5";
    deptName: string = "Admin";
    emps: IEmp[];

    constructor(private _fb: FormBuilder, private _userService: UserService) { }

    ngOnInit() {
        this.userFrm = this._fb.group({
            DeptID: [''],
            DeptName: [''],
            Employees: this._fb.array([
//                this.initEmployees(),
            ])
        });

        this.LoadEmp();
    }

    initEmployees() {
        return this._fb.group({
            EmpID: [''],
            EmpName: [''],
            DeptID: [''],
            Salary: ['']
        });
    }

    LoadEmp() {
        this._userService.get(Global.BASE_EMPBYDEPT_ENDPOINT + this.deptId).subscribe(data => {
            this.emps = data;
            this.addEmployee();
        });
    }

    addEmployee() {
        const control = <FormArray>this.userFrm.controls['Employees'];
        this.emps.forEach(x => { control.push(this._fb.group({ EmpID: x.EmpID, EmpName: x.EmpName, DeptID: x.DeptID, Salary: x.Salary })); })
    }

    save(model: any) {
        // call API to save
        // ...
        console.log(model);
        //console.log("Json Model: " + model.json());
        console.log(JSON.stringify(model._value));
        this._userService.masterdetail(Global.BASE_MASTERDETAIL_ENDPOINT, model).subscribe();
    }
}